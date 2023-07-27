import kotlinx.coroutines.InternalCoroutinesApi

import kotlinx.coroutines.internal.SynchronizedObject
import kotlinx.coroutines.internal.synchronized
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

/**
 * Analog of `val prop by lazy {}` that allows mutability (i.e. *`var`* `by LazyMutable {}`)
 * https://stackoverflow.com/a/47948047/12528345
 * */
class LazyMutable<T>(val initializer: () -> T) : ReadWriteProperty<Any?, T> {
    private object UNINITIALIZED_VALUE
    private var prop: Any? = UNINITIALIZED_VALUE
    @OptIn(InternalCoroutinesApi::class)
    val sync = SynchronizedObject()

    @OptIn(InternalCoroutinesApi::class)
    @Suppress("UNCHECKED_CAST")
    override fun getValue(thisRef: Any?, property: KProperty<*>): T {
        return if (prop == UNINITIALIZED_VALUE) {
            synchronized(sync) {
               return if (prop == UNINITIALIZED_VALUE) initializer().also { prop = it } else prop as T
            }
        } else prop as T
    }

    @OptIn(InternalCoroutinesApi::class)
    override fun setValue(thisRef: Any?, property: KProperty<*>, value: T) {
        synchronized(sync) {
            prop = value
        }
    }
}