import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from './mock/data.js'


/**
 * Class to store user data
 * @class
 */
class UserData {
    /**
     * Creates an instance of UserData.
     * @param {Object} userInfos - Contains user information
     * @param {number} todayScore - The user's score for today
     * @param {Object} keyData - Contains key information about the user
     */
    constructor(userInfos, todayScore, keyData) {
      this.userInfos = userInfos;
      this.todayScore = todayScore;
      this.keyData = keyData;
    }
  }
  
  /**
   * Class to store user activity data
   * @class
   */
  class UserActivity {
    /**
     * Creates an instance of UserActivity.
     * @param {string} day - The day of the week
     * @param {number} kilogram - The user's weight in kilograms
     * @param {number} calories - The number of calories burned by the user
     */
    constructor(day, kilogram, calories) {
      this.day = day;
      this.kilogram = kilogram;
      this.calories = calories;
    }
  }
  
  /**
   * Class to store user session data
   * @class
   */
  class UserSession {
    /**
     * Creates an instance of UserSession.
     * @param {string} day - The day of the week
     * @param {number} minutes - The length of the user's session in minutes
     */
    constructor(day, minutes) {
      this.day = day;
      this.minutes = minutes;
    }
  }
  
  /**
   * Class to store user performance data
   * @class
   */
  class UserPerformance {
    /**
     * Creates an instance of UserPerformance.
     * @param {string} subject - The subject or topic of the performance
     * @param {number} value - The user's value for the subject
     * @param {number} maxValue - The maximum possible value for the subject
     */
    constructor(subject, value, maxValue) {
      this.subject = subject;
      this.value = value;
      this.maxValue = maxValue;
    }
  }
  
  /**
   * Class to store user score data
   * @class
   */
  class UserScore {
    /**
     * Creates an instance of UserScore.
     * @param {string} name - The name of the score
     * @param {number} value - The value of the score
     */
    constructor(name, value) {
      this.name = name;
      this.value = value;
    }
  }
  
  /**
 * Function to retrieve the user score from the API
 * @async
 * @function
 * @param {number} id - The ID of the user
 * @returns {Array} An array of UserScore objects
 */
export const getUserScore = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    const { data } = await response.json()
    let score = data.todayScore || data.score
    let dataScore = []
    dataScore.push(new UserScore("score", score * 100))
    dataScore.push(new UserScore("maxScoreDifference", 100 - score * 100))
    return dataScore
}

/**
 * Function to retrieve the user score from mock data
 * @function
 * @param {number} id - The ID of the user
 * @returns {Array} An array of UserScore objects
 */
export const getUserScoreMock = (id) => {
    const userData = USER_MAIN_DATA.find(item => item.id === id)
    let score = userData.todayScore || userData.score
    let dataScore = []
    dataScore.push(new UserScore("score", score * 100))
    dataScore.push(new UserScore("maxScoreDifference", 100 - score * 100))
    return dataScore
}


/**
 * Function to retrieve the user data from the API
 * @async
 * @function
 * @param {number} id - The ID of the user
 * @returns {UserData} A UserData object
 */
export const getUserData = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    const { data } = await response.json()

    return new UserData(data.userInfos, data.todayScore || data.score, data.keyData)
}

/**
 * Function to retrieve the user data from mock data
 * @function
 * @param {number} id - The ID of the user
 * @returns {UserData} A UserData object
 */
export const getUserDataMock = (id) => {
    const userData = USER_MAIN_DATA.find(item => item.id === id)
    return new UserData(userData.userInfos, userData.todayScore || userData.score, userData.keyData)
}

/**
 * Function to retrieve the user activity data from the API
 * @async
 * @function
 * @param {number} id - The ID of the user
 * @returns {Array} An array of UserActivity objects
 */
export const getUserActivity = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`)
    const { data } = await response.json()
    const formatedDataActivity = []
    data.sessions.map((session, index) => formatedDataActivity.push(new UserActivity(session.day.charAt(session.day.length - 1), session.kilogram, session.calories)))
    return formatedDataActivity
}

/**
 * Returns the mock data of user's activity.
 *
 * @param {string} id - The ID of the user.
 * @returns {Array} An array of objects that represent the user's activity.
 */

export const getUserActivityMock = (id) => {
    const userActivity = USER_ACTIVITY.find(item => item.userId === id)
    const formatedDataActivity = []
    userActivity.sessions.map((session, index) => formatedDataActivity.push(new UserActivity(session.day.charAt(session.day.length - 1), session.kilogram, session.calories)))
    return formatedDataActivity
}

/**
 * Returns the data of user's session from the API
 *
 * @param {string} id - The ID of the user.
 * @returns {Array} An array of objects that represent the user's session.
 */

export const getUserSession = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const { data } = await response.json()
    const days = ["l", "m","m","j","v","s","d"]
    const formatedDataSessions = []
    data.sessions.map((session, index) => formatedDataSessions.push(new UserSession(days[index].toUpperCase(), session.sessionLength)))
    return formatedDataSessions
}

/**
 * Returns the mock data of user's session.
 *
 * @param {string} id - The ID of the user.
 * @returns {Array} An array of objects that represent the user's session.
 */

export const getUserSessionMock = (id) => {
    const userSessions = USER_AVERAGE_SESSIONS.find(item => item.userId === id)
    const days = ["l", "m","m","j","v","s","d"]
    const formatedDataSessions = []
    userSessions.sessions.map((session, index) => formatedDataSessions.push(new UserSession(days[index].toUpperCase(), session.sessionLength)))
    return formatedDataSessions
}

/**
 * Returns the data of user's performance from the API
 *
 * @param {string} id - The ID of the user.
 * @returns {Array} An array of objects that represent the user's performance.
 */

export const getUserPerformance = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/performance`)
    const { data } = await response.json()
    const userPerformances = []
    const subject = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
    data.data.forEach((d, index) => userPerformances.push(new UserPerformance(subject[index], d.value, 250)))
    return userPerformances
}

/**
 * Returns the mock data of user's performance.
 *
 * @param {string} id - The ID of the user.
 * @returns {Array} An array of objects that represent the user's performance.
 */

export const getUserPerformanceMock = (id) => {
    const userPerformances = []
    const subject = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
    const userPerformance = USER_PERFORMANCE.find(item => item.userId === id)
    userPerformance.data.forEach((d, index) => userPerformances.push(new UserPerformance(subject[index], d.value, 250)))
    return userPerformances
}