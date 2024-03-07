import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'About Us',
}

    /* const getHtml = async () => {
        try {
            return await axios.get('https://search.naver.com/search.naver?ssc=tab.blog.all&sm=tab_jum&query=%EC%84%9C%EC%9A%B8%EC%8A%A4%EB%A7%88%EC%9D%BC%EB%9D%BC%EC%8B%9D');
        } catch (error) {
            console.error(error);
        }
    }

    getHtml().then((html) => {
        const $ = cheerio.load(html.data);
        const data = $('#main_pack > section > div.api_subject_bx > ul > li:nth-child(1)');
        const dataText = data.text();

        // #main_pack > section > div.api_subject_bx > ul > li:nth-child(1) > div > div.detail_box
        // #main_pack > section > div.api_subject_bx > ul > li:nth-child(2) > div > div.detail_box
        // #main_pack > section > div.api_subject_bx > ul > li:nth-child(4) > div > div.detail_box

        const ulList = $('#main_pack > section > div.api_subject_bx > ul > li');
        ulList.map((i, element) => {
            console.log('i ::: ' + i);
            console.log('element ::: ' + element);
            console.log('=====================');
        })

        return data;
    }); */

export default function AboutUs() {
    return (
    <div>
        <h1>About Us</h1>
    </div>
    )
}