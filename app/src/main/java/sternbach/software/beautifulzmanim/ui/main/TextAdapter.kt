package sternbach.software.beautifulzmanim.ui.main;

import android.view.LayoutInflater
import android.view.View;
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import sternbach.software.beautifulzmanim.R

class TextAdapter(val strings: List<String>): RecyclerView.Adapter<TextAdapter.TextViewHolder>() {
    class TextViewHolder(view:View): RecyclerView.ViewHolder(view){
        val text = view as TextView
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TextViewHolder {
        return TextViewHolder(
            TextView(parent.context)
        )
    }

    override fun onBindViewHolder(holder: TextViewHolder, position: Int) {
        holder.text.text = strings[position]
    }

    override fun getItemCount(): Int {
        return strings.size
    }
}