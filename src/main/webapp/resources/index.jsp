<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<title></title>
	<spring:url value="/resources/js/framework/bootstrap/dist/css/bootstrap.min.css" var="bootstrapCss" />
	<spring:url value="/resources/css/normalize.min.css" var="normalize" />	
	<spring:url value="/resources/css/main.css" var="main" />	

	<link rel="stylesheet" href="${bootstrapCss}" />
	<link rel="stylesheet" href="${normalize}"	  />
	<link rel="stylesheet" href="${main}"		  />              	

</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">

            <select class="form-control" id="searchBaseOn">
                <option>name</option>
                <option>price</option>
            </select> 

        </div>
        <div id="navbar" class="navbar-collapse collapse">

        <form class="navbar-form navbar-right">
               
                <div class="form-group">
                  <input type="text" placeholder="Email" class="form-control" id="searchBox">
                </div>

                <button type="submit" class="btn btn-success" id="searchBtn">Search</button>
        </form>
        </div><!--/.navbar-collapse -->
    </div>
    </nav>

    <!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
      <div class="container">
      <table class="table">
      <caption>Optional table caption.</caption>
          
          <thead>
            <tr>
              <th>partnumber</th>
              <th>name</th>
              <th>price</th>
            </tr>

<!--           <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody> -->
    </table>
    </div>
</div>


<spring:url value="/resources/js/framework/jquery/dist/jquery.min.js" var="jQueryJs"/>
<spring:url value="/resources/js/framework/bootstrap/dist/js/bootstrap.min.js" var="BootstrapJs"/>
<spring:url value="/resources/js/vendor/modernizr-2.8.3.min.js" var="modernizr"/>
<spring:url value="/resources/js/model.js" var="model"/>
<spring:url value="/resources/js/controller.js" var="controller"/>

<script src="${jQueryJs}"	></script>
<script src="${BootstrapJs}"></script>
<script src="${modernizr}"	></script>
<script src="${model}"		></script>
<script src="${controller}" ></script>  
</body>
</html>


