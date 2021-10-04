<script runat="server">
  
        Platform.Load("core", "1");
        var req = ContentAreaObj.Retrieve({Property:"ID",SimpleOperator:"equals",Value:13814211});
        Write(Stringify(req[0].Name));

</script>
