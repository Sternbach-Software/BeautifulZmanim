package sternbach.software.simpleemr

@JvmInline
value class SplitType(val value: Int) {
    companion object {
        val None = SplitType(0)
        val Start = SplitType(1)
        val End = SplitType(2)
        val Both = SplitType(3)
    }
}