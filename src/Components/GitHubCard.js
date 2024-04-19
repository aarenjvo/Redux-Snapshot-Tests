import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from 'react'
import { useEffect } from 'react'

function GitHubCard({ userData }) {
    useEffect(() => {
        console.log('display user data mounted')
    }, [])
    return (
        <div>
            <h1>{userData.login}</h1>
            <img src={userData.avatar_url} alt='profile' />
            {userData.name && <h2>Name: {userData.name}</h2>}
            <p>
                <a href={userData.html_url} target="blank">Profile</a>
            </p>
            {userData.bio && <p>Bio: {userData.bio}</p>}
            {userData.twitter_username && <p>Twitter: {userData.twitter_username}</p>}
        </div>
    );
}

export default GitHubCard