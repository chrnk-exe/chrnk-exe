import React, {useState} from 'react'
import { Fade, Bounce } from 'react-reveal'
import classes from './CustomForm.module.css'

const GAME = 'Game'
const SITE = 'Web Site'
const PROTOTYPE = 'Prototype'
const tGame='game'
const MULTIPLAYER = 'Multiplayer'
const OTHER = 'Other...'
const LANDING = 'Landing'
const APP = 'Web Application'
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const CustomForm = () => {
    const [formInfo, setForm] = useState({
        name: '',
        email: '',
        description: ''
    })

    const [formOptions, setOption] = useState({
        type: GAME,
        gameType: PROTOTYPE,
        gameDescription: '',
        siteType: LANDING
    })

    const sendMessage = async () => {
        console.log('hahaha ewe ne rabotaet))')
        alert('Coming soon!')
        // fetch()
    }

  return (
    <form>
        <h1>Contact us!</h1>
        <div className={classes.formInputContainer}> 
            <h2>Name</h2>
            <input value={formInfo.name} onChange={e => setForm({...formInfo, name: e.target.value})} className={classes.formInput} placeholder='Name'/>
        </div>
        <div className={classes.formInputContainer}>
            <h2>E-mail</h2>
            <input style={{color: re.test(String(formInfo.email).toLowerCase()) ? 'initial' : 'red'}} value={formInfo.email} onChange={e => setForm({...formInfo, email: e.target.value})} className={classes.formInput} type="email" placeholder='Email' />
        </div>
        
        <div className={classes.formOptions}>
            <select onChange={e => setOption({...formOptions, type: e.target.value, gameType: PROTOTYPE, siteType: LANDING})}>
                <option value={GAME}>Game</option>
                <option value={SITE}>Web site</option>
            </select>
            {
                ((formOptions) => {switch(formOptions?.type) {
                        case GAME:
                            return (
                            <div className={classes.selectContainer}>  
                                <select onChange={e => setOption({...formOptions, gameType: e.target.value})}>
                                    <option value={PROTOTYPE}>Prototype</option>
                                    <option value={tGame}>Game</option>
                                    <option value={MULTIPLAYER}>Multiplayer Game</option>
                                    <option value={OTHER}>Other...</option>
                                </select>
                                <Bounce when={formOptions.gameType === OTHER} duration={500}>
                                    <input style={{opacity: formOptions.gameType === OTHER ? 1 : 0}} className={classes.formInput} value={formOptions.gameDescription} onChange={e => setOption({...formOptions, gameDescription: e.target.value})} placeholder={'Game genre'}/>
                                </Bounce>    
                            </div>
                            )
                        case SITE:
                            return (
                                <div className={classes.selectContainer}>
                                    <select onChange={e => setOption({...formOptions, siteType: e.target.value})}>
                                        <option value={LANDING}>Landing page</option>
                                        <option value={APP}>Web Application</option>
                                    </select>
                                    <input style={{opacity: 0}} className={classes.formInput} value={formOptions.gameDescription} onChange={e => setOption({...formOptions, gameDescription: e.target.value})}/>
                                </div>
                            )
                        default:
                            return (<div>eror)</div>)
                    }
                })(formOptions)
            }
        </div>
        <h2>{formOptions.type} description</h2>
        <textarea cols={14} rows={6} value={formInfo.description} onChange={e => setForm({...formInfo, description: e.target.value})}/>
        <button className={classes.snip1535} onClick={sendMessage}>Submit!</button>
    </form>
  )
}

export default CustomForm