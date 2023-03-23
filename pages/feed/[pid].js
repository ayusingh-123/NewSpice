import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';

import Headbar from '../../components/Headbar'


export const Feed = ({pageNumber, articles}) => {
    const router = useRouter();
    const[query, setQuery] = useState("");
    const[items, setItems] = useState(articles);
    
    
  console.log(articles);

    const getFilteredItems = (query, articles) => {
      if(!query){
        return articles;  
      }
      return articles.filter((article) => article.title.toLowerCase().includes(query) || article.description.toUpperCase().includes(query));
    }

   

    const filteredItems = getFilteredItems(query,articles);
    
    const updateQuery = e => setQuery(e?.target?.value);

    const debouncedOnChange = debounce(updateQuery, 200);
  return (
    <>
    <Headbar/>
    <div className={styles.main}>
        
        <div className='searchbar'>
          <div className={styles.bar}>
          <label>Search</label> 
          <input type="text" className={styles.ops} placeholder='trending news ...' onChange={debouncedOnChange} />
          <div className={styles.sort}>
                    <label>Category </label>
                    <select className={styles.ops}>
                        <option>Select</option>
                        <option value="latest">Latest</option>
                        <option value="older">Older</option>
                    </select>
                </div>
          </div>
          
          {
            filteredItems.map((value, index) => (
              <div key={index} className={styles.post}>
                <h1 onClick={() => (window.location.href = value.url)}>{value.title}</h1>
                <p>{value.description}</p>
                {!!value.urlToImage && <img src={value.urlToImage}/>}
            </div>
            ))
          }
        </div>
        

    <div className={styles.paginator}>
        <div
        onClick={() => {
            if(pageNumber > 1) {
                router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0,0));
            }
        }}
        className={pageNumber === 1 ? styles.disabled : styles.active}><div className={styles.btn}>Previous</div>  </div>

        <div style={{fontSize:20,}}>{pageNumber}</div>

        <div
        onClick={() => {
            if(pageNumber < 5) {
                router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0,0));
            }
        }}
        className={pageNumber === 5 ? styles.disabled : styles.active}><div className={styles.btn}>Next</div> </div>
    </div>

    </div>
    </>
  );
};


export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pid;
  
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
      return {
        props: {
          articles: [],
          pageNumber: 1,
        },
      };
    }
  
    const apiResponse = await(await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=945b055ea50242dabe93e1574b8c5819&pageSize=5&page=${pageNumber}`,
    // {
    //            headers: {
    //                Authorization: 945b055ea50242dabe93e1574b8c5819
    //              },
    //          },
    )).json();
  
    const { articles } = apiResponse;

  
    return {
      props: {
        articles: articles,
        pageNumber: Number.parseInt(pageNumber),
      },
    };
  };

export default Feed;