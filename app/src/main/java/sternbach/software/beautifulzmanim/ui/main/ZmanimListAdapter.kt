package sternbach.software.beautifulzmanim.ui.main

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.SimpleAdapter
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import sternbach.software.beautifulzmanim.R

class ZmanimListAdapter(val models: List<ZmanCardModel>): RecyclerView.Adapter<ZmanimListAdapter.ZmanViewHolder>() {
    class ZmanViewHolder(view: View): RecyclerView.ViewHolder(view){
        val text1: TextView = view.findViewById(R.id.text1)
        val text2: TextView = view.findViewById(R.id.text2)
        val otherOpinionsList: RecyclerView = view.findViewById(R.id.other_opinions_list)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ZmanViewHolder {
        return ZmanViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.zman_card, parent, false))
    }

    override fun onBindViewHolder(holder: ZmanViewHolder, position: Int) {
        val model = models[position]
        holder.text1.text = model.text1
        holder.text2.text = model.text2
        holder.otherOpinionsList.adapter = TextAdapter(model.otherOpinions)
    }

    override fun getItemCount(): Int {
        return models.size
    }
}