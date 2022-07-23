import axios from "axios"
import { useState, useEffect } from "react";
const tabs = ['shrtco.de', '9qr.de', 'shiny.link']
function Content() {
    const [link, setLink] = useState("")
    const [type, setType] = useState('shrtco.de')
      const handleClick = (e) => {
        const getvalue = document.querySelector('.linkinput').value
        let linkchien = `https://api.shrtco.de/v2/shorten?url=${getvalue}`;
        e.preventDefault()
        axios({
            method: 'GET',
            url: linkchien,
            data: null
          }).then(res => {
            console.log(res.data.result);
            if(type == 'shrtco.de') {
                setLink(res.data.result.short_link)
            }
            if(type == '9qr.de') {
                setLink(res.data.result.short_link2)
            }
            if(type == 'shiny.link') {
                setLink(res.data.result.short_link3)
            }
            console.log(type);
          });
      }


    return(
        <div className="container">
            <h1 className="content-header">
                The pricavy-friendly URL Shortener
            </h1>
            <div className="body">
                <h2> Link Shortener </h2>
                <div>
                    <form>
                        <label htmlFor="">Enter a Link</label>
                        <input className="linkinput" type='text'></input>
                        <button onClick={handleClick}>Lauch</button>
                    </form>
                </div>
                <div>
                    <label htmlFor="">Short domain</label>
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            style={type === tab ? {
                                backgroundColor: '#fff',
                                color: '#333'
                            } : {}}
                            onClick={() => setType(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <h1>{link}</h1>
        </div>
    )
}
export default Content