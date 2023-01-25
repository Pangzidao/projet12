import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from './mock/data.js'


class UserData{
   constructor(userInfos, todayScore, keyData){
    this.userInfos = userInfos
    this.todayScore = todayScore
    this.keyData = keyData
   }
}

class UserActivity{
    constructor(day, kilogram, calories){
        this.day = day
        this.kilogram = kilogram
        this.calories = calories
    }
}

class UserSession{
    constructor(day, minutes){
        this.day = day
        this.minutes = minutes
    }
}

class UserPerformance{
    constructor(subject, value, fullValue){
        this.subject = subject
        this.value = value
        this.fullValue = fullValue
    }
}

export const getUserData = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    const { data } = await response.json()

    return new UserData(data.userInfos, data.todayScore || data.score, data.keyData)
}

export const getUserDataMock = (id) => {
    const userData = USER_MAIN_DATA.find(item => item.id === id)
    return new UserData(userData.userInfos, userData.todayScore || userData.score, userData.keyData)
}

export const getUserActivity = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`)
    const { data } = await response.json()
    const formatedDataActivity = []
    data.sessions.map((session, index) => formatedDataActivity.push(new UserActivity(session.day.charAt(session.day.length - 1), session.kilogram, session.calories)))
    return formatedDataActivity
}

export const getUserActivityMock = (id) => {
    const userActivity = USER_ACTIVITY.find(item => item.userId === id)
    const formatedDataActivity = []
    userActivity.sessions.map((session, index) => formatedDataActivity.push(new UserActivity(session.day.charAt(session.day.length - 1), session.kilogram, session.calories)))
    return formatedDataActivity
}

export const getUserSession = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const { data } = await response.json()
    const days = ["l", "m","m","j","v","s","d"]
    const formatedDataSessions = []
    data.sessions.map((session, index) => formatedDataSessions.push(new UserSession(days[index].toUpperCase(), session.sessionLength)))
    return formatedDataSessions
}

export const getUserSessionMock = (id) => {
    const userSessions = USER_AVERAGE_SESSIONS.find(item => item.userId === id)
    const days = ["l", "m","m","j","v","s","d"]
    const formatedDataSessions = []
    userSessions.sessions.map((session, index) => formatedDataSessions.push(new UserSession(days[index].toUpperCase(), session.sessionLength)))
    return formatedDataSessions
}

export const getUserPerformance = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/performance`)
    const { data } = await response.json()
    const userPerformances = []
    data.data.forEach((d) => userPerformances.push(new UserPerformance(d.kind, d.value, 250)))
    data.data.map((p) => p.kind = data.kind[p.kind])
    return userPerformances
}

export const getUserPerformanceMock = (id) => {
    const userPerformances = []
    const userPerformance = USER_PERFORMANCE.find(item => item.userId === id)
    userPerformance.data.forEach((d) => userPerformances.push(new UserPerformance(d.kind, d.value, 250)))
    userPerformance.data.map((p) => p.kind = userPerformance.kind[p.kind])
    return userPerformances
}