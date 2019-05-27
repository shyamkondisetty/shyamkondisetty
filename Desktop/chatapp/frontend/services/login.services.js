app.service('loginService', function ($location, $http, $rootScope) {
    this.loginClick = function (logindata) {

        console.log(logindata)
        $http({
            url: 'http://localhost:3000/login',
            method: 'POST',
            data: logindata
        }).then(function (response) {
            console.log('myresponse :   ', response)
            //$rootScope.sender=logindata.useremail;
            localStorage.setItem('sender', JSON.stringify(logindata.useremail));
            localStorage.setItem('senderUsername', JSON.stringify(logindata.username));
            //JSON.parse(localStorage.getItem(key));
            //localStorage.setItem(key, JSON.stringify(myObj));
            //localStorage.removeItem(key);
            //$rootScope.logggedin=true
            localStorage.setItem('records', JSON.stringify([]));

            //$rootScope.records=[];
            socket.emit('has connected', logindata.useremail)
            socket.on('has connected', function (onlineUsers) {
                console.log("hi iam in socket on", onlineUsers)
                localStorage.removeItem('records');
                let recorrdsinservices = []
                for (let i = 0; i < onlineUsers.length; i++) {
                    if (onlineUsers[i] !== logindata.useremail) {
                        recorrdsinservices.push(onlineUsers[i])
                    }
                }
                localStorage.setItem('records', JSON.stringify(recorrdsinservices));
                //$rootScope.records=onlineUsers;
            })
            $http({
                url: 'http://localhost:3000/getAllUsers',
                method: 'POST',
            }).then(function (response) {
                console.log('myresponse :   ', response)
                console.log('allusers',response.data.data)

                localStorage.setItem('alluserrecords', JSON.stringify(response.data.data));
                
            })
                .catch(function (err) {
                    console.log("error occured", err);
                })  





            $location.path("/dash");

        })
            .catch(function (err) {
                console.log("error occured", err);
            })



            








    }
    this.signupClick = function () {
        $location.path('/register')
    }
    this.forgetClick = function () {
        $location.path('/forgetpassword')
    }
})

