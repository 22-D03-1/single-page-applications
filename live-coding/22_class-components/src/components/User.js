import { Component } from "react"

export default class User extends Component {
    constructor(props) {
        //super muss ausgeführt werden, damit wir Zugriff auf this haben
        super(props)

        /**
         * Anstatt useState wird der State in Klassenkomponenten direkt
         * im constructor initialisiert
         */
        this.state = {
            avatar: ""
        }
    }
    /**
     * WIEDERHOLUNG useEffect:
     * 
     * Beim intialen Laden
     * useEffect(()=>{...},[])
     * 
     * Beim Updaten der Variable
     * useEffect(()=>{...},[variableName])
     * 
     * Immer
     * useEffect(()=>{...})
     * 
     * Beim unmounten
     * useEffect(()=>{... return () => {}})
     * 
     * REIHENFOLGE LIFECYCLE METHODS - Mounting
     * 1. constructor
     * 2. componentWillMount (deprecated)
     * 3. render
     * 4. componentDidMount
     * 
     * Reihenfolge Lifecycle Methods - Updating
     * 1. shouldComponentUpdate
     * 2. render
     * 3. componentDidUpdate
     */

    componentWillMount() {
        /**
         * Wird vor dem Rendern ausgeführt und triggered KEIN rerendering
         * Diese Lifecycle Methode wurde von React retired
         * Sie funktioniert zwar noch aber man bekommt eine Warnung im Browser.
         */
        console.log("Will Mount")
    }

    componentDidMount() {
        console.log("Did Mount")
        this.setState({
            avatar: `https://avatars.dicebear.com/api/human/${this.props.name}.svg`
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Wird vor einem Update ausgeführt
         * mit dem return von true oder false kann entschieden werden,
         * ob ein Update durchgeführt werden soil oder nicht
         */
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        /** 
         * Wird nach einem update der props oder state ausgeführt
         * Über die Parameter haben wir Zugriff auf den vorherigen
         * Stand der props/state.
         * 
         * WICHTIG ein setState in dieser Komponente kann einen "infinite loop"
         * auslösen, wodurch unsere APP crashed
         * */ 
        console.log("aktuelle props", this.props.name)
        console.log("vorherige props", prevProps.name)

        console.log("aktueller state", this.state.avatar)
        console.log("vorheriger state", prevState.name)

        setTimeout(()=> {
            console.log("Call Database on change")
        }, 2000)
    }

    componentWillUnmount() {
        /**
         * Wird Ausgeführt bevor die Komponente aus dem DOM entfernt wird
         */
        console.log("wird unmounted")
    }
    
    render() {
        /**
         * Wichtigste Methode. Wird jedesmal ausgeführt, wenn die Komponente
         * im DOM eingefügt wird.
         */
        console.log("render")
        const { loggedIn, name } = this.props
        return (
            <div>
                <img src={this.state.avatar} width="200"/>
                <div>Username: herrids</div>
                <div>Location: Berlin</div>
                <div>Name: {name}</div>
                <div>Logged in: {loggedIn ? "logged In" : "not logged in"}</div>
            </div>
        )
    }
}