'use strict';

module.exports.hello = (event,context,callback) => {
    // var eventjson= event;
    // var first = eventjson["first"];
    // var second = eventjson["second"];
    // //const {first,second} = eventjson;
    // console.log(first, second);
    // const added = first + second;
    //console.log(event.pathParameters.name);
    //const reply = `Hello ${event.pathParameters.name}. The current time is ${new Date().toTimeString()}.`;
    const reply = `Hello Foram. The current time is ${new Date().toTimeString()}.`;
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: JSON.stringify(reply)
        })
    };
    callback(null,response); 
    // or in case you want to throw error
    //callback(new Error("something went wrong..!"));
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
