// "use client"
import axios from "axios";
import Navigation from "../../components/navigation";
import { data } from "cheerio/lib/api/attributes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { API_URL } from "../constants";
const cheerio = require('cheerio');

export const metadata = {
    title: 'Home',
}

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));  // 백엔드 timeout (not good)
    const response = await fetch(API_URL);
    const json = await response.json();

    return json;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
    <div className={styles.container}>
        {movies.map(movie => (
            <Movie
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
            />
        ))}
    </div>
    )
}
