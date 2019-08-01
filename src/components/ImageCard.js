import React from 'react'
import { Card, Button } from 'antd';


const ImageCard = ({ image, handleClick }) => {
    let { url, width, height } = image;
    return (
        <Card
            hoverable
            style={{ width: 240 }}

            className="mt-1"
            cover={<img alt="example" src={`${url}`} />}>
            <p>Width : {`${width} px`}</p>
            <p>Height : {`${height} px`}</p>
            <Button type="primary mt-1" block onClick={handleClick}>
                Retry
            </Button>
        </Card >
    )
}

export default ImageCard
