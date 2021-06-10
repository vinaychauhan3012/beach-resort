import React, { Component } from 'react'
import {FaCocktail,FaBeer,FaShuttleVan,FaHiking} from "react-icons/fa"
import Title from "./Title"
export default class Services extends Component {
    state = {
        services :  [
            {
            icon : <FaCocktail/>,
            title : "free cocktails",
            info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto illo esse quam quo non unde eos libero, accusamus, molestiae laboriosam?"
            },
            {
                icon : <FaHiking/>,
                title : "endless hikings",
                info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto illo esse quam quo non unde eos libero, accusamus, molestiae laboriosam?"
            },
            {
            icon : <FaShuttleVan/>,
            title : "free shuttles",
            info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto illo esse quam quo non unde eos libero, accusamus, molestiae laboriosam?"
            }, 
            {
                icon : <FaBeer/>,
                title : "stronest beers",
                info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto illo esse quam quo non unde eos libero, accusamus, molestiae laboriosam?"
            },   
        ]
    }
        
    render() {
        return (
            <section className="services">
                <Title title = "services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
