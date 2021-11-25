<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Column Grouping</title>
<script type="text/javascript">
		var resultJson = <%=request.getAttribute("resultJson")%>;
</script>
<script src="scripts/realgridjs-lic.js"></script>
<script src="scripts/realgridjs_eval.1.0.15.min.js"></script>
<script src="scripts/realgridjs-api.1.0.15.js"></script>
<script src="scripts/styles.js"></script>
<script src="js/ColumnGrouping.js"></script>
<script src="scripts/dlgrids_200.js"></script>
<script src="scripts/realgridjs.js"></script>
<title>Column Grouping</title>
</head>

<body>
	<div id="realgrid" style="height: 500px; width: 900px;"></div>
	<div>
		<form name="jsonDataForm" method="post">
			<input type="button" id="btnInsert" onclick="btnInsertClick()"
				value="Insert" /> <input type="button" id="btnDel"
				onclick="btnDelClick()" value="Delete" /> <input type="text"
				id="txtJson" name="txtJson" style="display: none" /> <input
				type="button" id="btnSave" onclick="btnSaveClick()" value="Save" />
		</form>
	</div>
</body>

</html>