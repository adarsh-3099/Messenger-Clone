import { Typography,Card,CardContent } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'

const message = forwardRef(({userName,message},ref) => {

    const isUser = userName === message.userName

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard' : 'message__guest'}>
                <CardContent>
                    <Typography
                    color='White'
                    variant='h5'
                    component='h2'>
                        {!isUser && `${message.userName || 'Unknown User'}:`}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default message