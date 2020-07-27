import React, {useEffect, useState} from "react";
import axios from 'axios';

function PostListPageByUser() {
    const [posts, setPost] = useState([]);
    const [userId, setUserId] = useState([]);
    let signal = axios.CancelToken.source();

    function handleChange(event) {
        setUserId(event.target.value);
    }

    const handleClick = (event) => {
        axios.get("http://localhost:8000/api/car/p_list?search=" + event, {
            cancelToken: signal.token,
        })
            .then(res => {
                const posts = res.data;
                setPost(posts);
            }).catch(err => {
            console.log(err);
        });
    }
    return (
        <React.Fragment>
        <section class="product_list section_padding">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="product_sidebar">
                        <div class="single_sedebar">
                            <form>
                                <input type="text" name="search" onChange={handleChange} placeholder="Search keyword"/>
                                <i class="ti-search" onClick={handleClick}></i>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="product_list">
                        <div class="row"> <br/><br/><br/>

                        {
                            posts.map((post) => {<ul key={post.id}>
                                <div class="col-lg-8 col-xl-9">

                                    <img src={post.product_image} alt="" class="img-fluid" />
                                    <h3>{post.title}</h3>

                                </div>
                            </ul>})
                        }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </React.Fragment>
    );
}
export default PostListPageByUser;



