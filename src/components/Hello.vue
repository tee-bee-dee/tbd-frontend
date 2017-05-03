<template>
  <div id="form-wrapper">
    <div id="form1">
      <form id="first">
        <header>FORMAT DATE</header>
        <p>Note: Input must be 8 digits.</p>
        <p>Example: 11031995 ==> 11-03-1995 </p>
        <input id="date" type="text" v-model="date1">
        <button class="btn btn1" type="button" v-on:click="formatDate">Format Date</button>
        <div id="formatResult">{{ formattedDate }}</div>
      </form>
    </div>

    <div id="form2">
      <form id="second">
        <header id="rightH">VALIDATE DATE</header>
        <p>Note: Input must be MM-DD-YYYY.</p>
        <p>Example: 11-03-1995 ==> true </p>
        <input id="date2" type="text" v-model="date2">
        <button class="btn btn2" type="button" v-on:click="validateDate">Validate Date</button>
        <div id="validateResult">{{ validDate }}</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      date1: null,
      date2: null,
      formattedDate: null,
      validDate: null
    }
  },
  methods: {
    formatDate () {
      fetch('https://tbd-backend.herokuapp.com/date/format', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: this.date1 })
      })
      .then((res) => { return res.json() })
      .then((data) => { this.formattedDate = data.date })
    },

    validateDate () {
      fetch('https://tbd-backend.herokuapp.com/date/isValid', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date2: this.date2 })
      })
      .then((res) => { return res.json() })
      .then((data) => { this.validDate = data.valid })
    }
  }
}
</script>

<style scoped>
header {
	font-size: 37px;
	font-weight: 625;
	text-align: center;
	padding-left: 37px;
	padding-right: 37px;
	font: 'Lato', Calibri, Arial, san-serif;
	letter-spacing: 2.5px;
}

header:after {
	content:' ';
	display:block;
	border:1.25px solid white;
}


#rightH:after {
	content:' ';
	display:block;
	border:1.25px solid #688191;
}

#form-wrapper {
	display: table;
	margin-left: auto;
	margin-right: auto;
	height: 100%;
	margin-top: 100px;
}

#row {
	display: table-row;
}

#form1 {
	display: table-cell;
	width: 500px;
	height: 400px;
	text-align: center;
	vertical-align: middle;
	position: absolute;
	top: 50%;
	transform: translate(-100%, -50%);
}

#form2 {
	display:table-cell;
	width: 500px;
	height: 400px;
	text-align: center;
	vertical-align: middle;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
}

#first {
	background-color: #a7e5ed;
	color: #ffffff;
	padding-top: 37px;
	box-shadow: 0 10px 12.5px 0 rgba(0, 0, 0, 0.2), 0 7.5px 25px 0 rgba(0, 0, 0, 0.19);
	height: 400px;
}

#second {
	background-color: #fefefe;
	color: #688191;
	padding-top: 37px;
	box-shadow: 0 10px 12.5px 0 rgba(0, 0, 0, 0.2), 0 7.5px 25px 0 rgba(0, 0, 0, 0.19);
	height: 400px;
}

#date {
	border: none;
	outline: none;
	background-color: #eafafa;
	font-family: 'Lato', Calibri, Arial, san-serif;
	font-size: 25px;
	font-weight: 625;
	color: #5acfdd;
}

#date2 {
	border: none;
	outline: none;
	background-color: #d5f6ec;
	font-family: 'Lato', Calibri, Arial, san-serif;
	font-size: 25px;
	font-weight: 625;
	color: #42d5aa;
}

#formatResult {
	color: #2bc3d4;
	text-align: left;
	margin-top: 10px;
	padding-left: 50px;
}

#validateResult {
	color: #29bc90;
	text-align: left;
	margin-top: 10px;
	padding-left: 50px;
}

.btn {
	border: none;
	font-family: 'Lato', Calibri, Arial, san-serif;
	font-size: 22.5px;
	color: #ffffff;
	cursor: pointer;
	padding: 12.5px 37px;
	border-radius: 6.25px;
	text-transform: uppercase;
	letter-spacing: 1.25px;
	font-weight: 875;
	outline: none;
	position: relative;
	-webkit-transition: none;
	-moz-transition: none;
	transition: none;
}

.btn1 {
	background: #89dde7;
	box-shadow: 0 7.5px #5acfdd;
}

.btn2 {
	background: #70dfbf;
	box-shadow: 0 7.5px #42d5aa;
}

.btn:after {
	content: '';
	position: absolute;
	z-index: -1;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.btn1:active {
	box-shadow: 0 0 #5acfdd;
	top: 7.5px;
}

.btn2:active {
	box-shadow: 0 0 #42d5aa;
	top: 7.5px;
}
</style>
