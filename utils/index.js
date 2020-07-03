const angleToRadial = (angle)=>{
    return (Math.PI/180) * angle
}

const calculateSlope = (p1, p2)=>{
    y2y1 = p2[1]-(p1[1])
    x2x1 = p2[0]-(p1[0])
    return (y2y1/x2x1)
}

const areaTriangle = (x1,y1,x2,y2,x3,y3)=>{
    return Math.abs((x1*y2 + x2*y3 + x3*y1 - y1*x2 - y2*x3 - y3*x1) / 2.0) 
}

const colineal = (x1,y1,x2,y2,x3,y3)=> {
    const area = areaTriangle(x1,y1,x2,y2,x3,y3)
    return (area == 0) ? true : false
}

const distanceBetweenPointLane = (p1, p2, origin)=>{
    // eq: |Ax + By + C| / sqrt pow(A, 2) + pow(B,2)
    let xy= origin //Origin, sun
    let m = calculateSlope(p1, p2)
    if(m == 0 || Math.abs(m) == Infinity ){
        return 0;
    }
    let dis = (Math.abs((p1[0] * xy[0]) + (p1[1] * xy[1]) + (m)) )/  Math.sqrt(Math.pow(p1[0], 2) + Math.pow(p1[1], 2))
    return dis
}

const pointIntoTriangle = (x1,y1,x2,y2,x3,y3,p1,p2) => {
    const triangleFather = areaTriangle(x1,y1,x2,y2,x3,y3)
    const triangleBigChild = areaTriangle(x1,y1,x2,y2,p1,p2) 
    const triangleMediumChild = areaTriangle(x1,y1,p1,p2,x3,y3) 
    const triangleSmallChild = areaTriangle(p1,p2,x2,y2,x3,y3)
    return (triangleFather == triangleBigChild + triangleMediumChild + triangleSmallChild) ? true : false
}

const verifyRain = (planets, day)=>{
    let coor = []
    planets.forEach((planet)=>{
        planet.position(day)
        coor.push(...planet.coordinates)
    })
    return pointIntoTriangle(...coor, 0,0)
}


const verifyDrought = (planets, day) => {
    let coor = []
    planets.forEach((planet)=>{
        planet.position(day)
        coor.push(planet.x, planet.y)
    })
    if(colineal(...coor)){
        let p1 = [planets[0].x, planets[0].y]
        let p2 = [planets[planets.length-1].x, planets[planets.length-1].y]
        let distance = distanceBetweenPointLane(p1, p2, [0,0])
        if(distance == 0){
            return true
        }
        else{
            return false
        }
    }
    return false
}



module.exports = {
    angleToRadial,
    colineal,
    calculateSlope,
    areaTriangle,
    verifyDrought,
    distanceBetweenPointLane,
    pointIntoTriangle,
    verifyRain
}