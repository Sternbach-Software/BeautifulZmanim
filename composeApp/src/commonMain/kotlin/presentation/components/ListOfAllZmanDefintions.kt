package presentation.components

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.selection.toggleable
import androidx.compose.material3.Checkbox
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.flow.transform
import sternbach.software.ZmanimViewModel
import sternbach.software.kosherkotlin.ZmanDescriptionFormatter
import sternbach.software.kosherkotlin.metadata.ZmanDefinition


@Composable
fun ListOfAllZmanDefinitions(zmanimViewModel: ZmanimViewModel) {
    val formatter = ZmanDescriptionFormatter()
    val enabled = remember { mutableStateMapOf<ZmanDefinition, Boolean?>() }
    val zmanim = zmanimViewModel.allZmanim.transform {
        println("transforming $it")
        emit(it?.map { it.definition })
    }.collectAsState(null)
    println(zmanim.value)
    LazyColumn {
        items(zmanim.value?.sortedBy { it.type } ?: emptyList()) {
            Row(
                Modifier
                    .fillMaxWidth()
                    .defaultMinSize(minHeight = 56.dp)
                    .toggleable(
                        value = it in enabled,
                        onValueChange = { checked ->
                            if (checked) {
                                enabled[it] = null
                            } else {
                                enabled.remove(it)
                            }
                        },
                        role = Role.Checkbox
                    )
                    .padding(horizontal = 16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Checkbox(
                    checked = it in enabled,
                    onCheckedChange = null // null recommended for accessibility with screenreaders
                )
                Text(
                    text = "${it.type.friendlyNameEnglish} - ${it.calculationMethod.valueToString()}",
                    style = MaterialTheme.typography.bodyLarge,
                    modifier = Modifier.padding(start = 16.dp),
                )
            }
        }
    }
}