import React, {useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import styles from '../modules/Main.module.css';
import Header from '../components/Header';
import Coverflow from 'react-coverflow';
// import { navigate } from '@reach/router';
// import MyContext from '../context/MyContext';

export default () => {
    const [active, setActive] = useState(0)
    // const context = useContext(MyContext);

    useEffect(() => {
        const int = setInterval(
            () => { 
                if (active === 5){
                    setActive(0)    
                }
                else {
                    setActive(active + 1)
                }
                
            }, 
            3000            
        );
        return () => {
            clearInterval(int);
        }
    }, [active]);

    return (
      <div className="container-fluid">
        <Header/>

        <Coverflow
            displayQuantityOfSide={2}
            infiniteScroll={true}
            enableHeading={false}
            enableScroll={true}
            active = {active}
            currentFigureScale={0.9}
            otherFigureScale={0.5}
            media={{
            "@media (max-width: 900px)": {
                width: "100%",
                height: "20rem",
            },
            "@media (min-width: 900px)": {
                width: "100%",
                height: "25rem",
            },
            }}

        >
            
            <img
            src="https://nerdist.com/wp-content/uploads/2013/11/BMTF_Cv25_ds.jpg"
            alt="Cover one"
            data-action="/details/1#"
            className={styles.img}
            />
            <img
            src="https://2.bp.blogspot.com/-LG0EfG8m3TY/W9zPpKdwugI/AAAAAAAACEs/ujAU2V7zYM86Ii6zl0_e8RWzXLoeVPNNQCLcBGAs/s1600/Action1000-final-lores.jpg"
            alt="Cover two"
            data-action="/details/1#"
            className={styles.img}
            />
            <img
            src="https://imgix-media.wbdndc.net/cms/filer_public/1b/d2/1bd2951e-f0a8-4b1f-8004-8baf5433cfc4/wonder_woman_229.jpg"
            alt="Cover three"
            data-action="/details/1#"
            className={styles.img}
            />
            <img
            src="https://images-na.ssl-images-amazon.com/images/I/91Zj-rbpu9L.jpg"
            alt="Cover four"
            data-action="/details/1#"
            className={styles.img}
            />
            <img
            src="https://www.comicburst.com/pub/media/wysiwyg/blog/immortal-hulk/Immortal-Hulk-1-Marvel-Comics-Kaare-Andrews-Connecting-Party-Variant-Cover.jpg"
            alt="Cover five"
            data-action="/details/1#"
            className={styles.img}
            />
            <img
            src="https://vignette.wikia.nocookie.net/marveldatabase/images/a/a2/Special_Edition_X-Men_Vol_1_1_Front.jpg/revision/latest?cb=20130912225955"
            alt="Cover six"
            data-action="/details/1#"
            className={styles.img}
            />
        </Coverflow>

        {/* <Carousel>
          <Carousel.Item>
            <img
              className={styles.img}
              src="https://nerdist.com/wp-content/uploads/2013/11/BMTF_Cv25_ds.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.img}
              src="https://2.bp.blogspot.com/-LG0EfG8m3TY/W9zPpKdwugI/AAAAAAAACEs/ujAU2V7zYM86Ii6zl0_e8RWzXLoeVPNNQCLcBGAs/s1600/Action1000-final-lores.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.img}
              src="https://imgix-media.wbdndc.net/cms/filer_public/1b/d2/1bd2951e-f0a8-4b1f-8004-8baf5433cfc4/wonder_woman_229.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.img}
              src="https://images-na.ssl-images-amazon.com/images/I/91Zj-rbpu9L.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.img}
              src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2258024.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.img}
              src="https://www.comicburst.com/pub/media/wysiwyg/blog/immortal-hulk/Immortal-Hulk-1-Marvel-Comics-Kaare-Andrews-Connecting-Party-Variant-Cover.jpg"
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.img}
              src="https://vignette.wikia.nocookie.net/marveldatabase/images/a/a2/Special_Edition_X-Men_Vol_1_1_Front.jpg/revision/latest?cb=20130912225955"
              alt="Sixth slide"
            />
          </Carousel.Item>
        </Carousel> */}

        
          <div className="row mt-3 ml-1 mr-1">
            <p className={styles.categoryLabel}><a href="/category/1">Marvel</a></p>
            
            <div className="d-flex justify-content-between">
              <a href="/details/1#" className={styles.thumbnailAnchor}>
                <img
                  className={styles.thumbnail}
                  src="https://nerdist.com/wp-content/uploads/2013/11/BMTF_Cv25_ds.jpg"
                  alt="thumbnail"
                />
              </a>

              <a href="/details/1#" className={styles.thumbnailAnchor}>
                <img
                  className={styles.thumbnail}
                  src="https://2.bp.blogspot.com/-LG0EfG8m3TY/W9zPpKdwugI/AAAAAAAACEs/ujAU2V7zYM86Ii6zl0_e8RWzXLoeVPNNQCLcBGAs/s1600/Action1000-final-lores.jpg"
                  alt="thumbnail"
                />
              </a>

              <a href="/details/1#" className={styles.thumbnailAnchor}>              
                <img
                  className={styles.thumbnail}
                  src="https://imgix-media.wbdndc.net/cms/filer_public/1b/d2/1bd2951e-f0a8-4b1f-8004-8baf5433cfc4/wonder_woman_229.jpg"
                  alt="thumbnail"
                />
              </a>

              <a href="/details/1#" className={styles.thumbnailAnchor}>              
                <img
                  className={styles.thumbnail}
                  src="https://images-na.ssl-images-amazon.com/images/I/91Zj-rbpu9L.jpg"
                  alt="thumbnail"
                />
              </a>

              <a href="/details/1#" className={styles.thumbnailAnchor}>              
                <img
                  className={styles.thumbnail}
                  src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2258024.jpg"
                  alt="thumbnail"
                />
              </a>

              <a href="/details/1#" className={styles.thumbnailAnchor}>              
                <img
                  className={styles.thumbnail}
                  src="https://www.comicburst.com/pub/media/wysiwyg/blog/immortal-hulk/Immortal-Hulk-1-Marvel-Comics-Kaare-Andrews-Connecting-Party-Variant-Cover.jpg"
                  alt="thumbnail"
                />
              </a>

              <a href="/details/1#" className={styles.thumbnailAnchor}>              
                <img
                  className={styles.thumbnail}
                  src="https://vignette.wikia.nocookie.net/marveldatabase/images/a/a2/Special_Edition_X-Men_Vol_1_1_Front.jpg/revision/latest?cb=20130912225955"
                  alt="thumbnail"
                />
              </a>
            </div>
          </div>


        <div className="row mt-3 ml-1 mr-1">
          <p className={styles.categoryLabel}><a href="/category/1">DC</a></p>
          
          <div className="d-flex justify-content-between">
            <a href="/details/1#" className={styles.thumbnailAnchor}>
              <img
                className={styles.thumbnail}
                src="https://nerdist.com/wp-content/uploads/2013/11/BMTF_Cv25_ds.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>
              <img
                className={styles.thumbnail}
                src="https://2.bp.blogspot.com/-LG0EfG8m3TY/W9zPpKdwugI/AAAAAAAACEs/ujAU2V7zYM86Ii6zl0_e8RWzXLoeVPNNQCLcBGAs/s1600/Action1000-final-lores.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://imgix-media.wbdndc.net/cms/filer_public/1b/d2/1bd2951e-f0a8-4b1f-8004-8baf5433cfc4/wonder_woman_229.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://images-na.ssl-images-amazon.com/images/I/91Zj-rbpu9L.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2258024.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://www.comicburst.com/pub/media/wysiwyg/blog/immortal-hulk/Immortal-Hulk-1-Marvel-Comics-Kaare-Andrews-Connecting-Party-Variant-Cover.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://vignette.wikia.nocookie.net/marveldatabase/images/a/a2/Special_Edition_X-Men_Vol_1_1_Front.jpg/revision/latest?cb=20130912225955"
                alt="thumbnail"
              />
            </a>
          </div>
        </div>


        <div className="row mt-3 ml-1 mr-1">
          <p className={styles.categoryLabel}><a href="/category/1">holder.category</a></p>
          
          <div className="d-flex justify-content-between">
            <a href="/details/1#" className={styles.thumbnailAnchor}>
              <img
                className={styles.thumbnail}
                src="https://nerdist.com/wp-content/uploads/2013/11/BMTF_Cv25_ds.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>
              <img
                className={styles.thumbnail}
                src="https://2.bp.blogspot.com/-LG0EfG8m3TY/W9zPpKdwugI/AAAAAAAACEs/ujAU2V7zYM86Ii6zl0_e8RWzXLoeVPNNQCLcBGAs/s1600/Action1000-final-lores.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://imgix-media.wbdndc.net/cms/filer_public/1b/d2/1bd2951e-f0a8-4b1f-8004-8baf5433cfc4/wonder_woman_229.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://images-na.ssl-images-amazon.com/images/I/91Zj-rbpu9L.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2258024.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://www.comicburst.com/pub/media/wysiwyg/blog/immortal-hulk/Immortal-Hulk-1-Marvel-Comics-Kaare-Andrews-Connecting-Party-Variant-Cover.jpg"
                alt="thumbnail"
              />
            </a>

            <a href="/details/1#" className={styles.thumbnailAnchor}>              
              <img
                className={styles.thumbnail}
                src="https://vignette.wikia.nocookie.net/marveldatabase/images/a/a2/Special_Edition_X-Men_Vol_1_1_Front.jpg/revision/latest?cb=20130912225955"
                alt="thumbnail"
              />
            </a>
          </div>
        </div>


      </div>
    );
};