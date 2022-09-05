import React from 'react';
import '../css/card.css';

const Card = ({ username, name, followers, following, publicRepos, avatarurl, type, email }) => {
    return (
        <React.Fragment>
            <section className="">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-10 col-sm-8 col-md-6 col-xl-4">

                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center">
                                    <div className="mt-3 mb-4">
                                        <img src={avatarurl}
                                            className="rounded-circle img-fluid" style={{ width: '100px' }} />
                                    </div>
                                    <h4 className="mb-2">{name}</h4>
                                    <p className="text-muted mb-4">@{username}
                                    </p>
                                    {/* <div className="mb-4 pb-2">
                                        <button style={{ borderRadius: '100px' }} type="button" className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-twitter fa-lg"></i>
                                        </button>
                                        <button type="button" className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-skype fa-lg"></i>
                                            <i className="fa-envelope fa-lg"></i>
                                        </button>
                                    </div> */}
                                    <button type="button" className="btn btn-primary btn-rounded btn-lg">
                                        <i class="fa-brands fa-github github-logo"></i>
                                        <a className='github-profile' target='_blank' href={`https://github.com/${username}`}>Github Profile</a>
                                    </button>
                                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                        <div>
                                            <p className="mb-2 h3 h-25 h-50">{following}</p>
                                            <p className="text-muted mb-0">Following</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-2 h3 h-25 h-50">{followers}</p>
                                            <p className="text-muted mb-0">Followers</p>
                                        </div>
                                        <div>
                                            <p className="mb-2 h3 h-25 h-50">{publicRepos}</p>
                                            <p className="text-muted mb-0">Public Repos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}

export default Card;