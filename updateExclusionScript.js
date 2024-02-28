<script runat="server">
  Platform.Load("core","1");
  var customerKeys = [“TriggeredSendInteractionCustomerKey1”, “TriggeredSendInteractionCustomerKey2”, “TriggeredSendInteractionCustomerKey3”, “TriggeredSendInteractionCustomerKey4”];
  var exclusionScript = 'Domain(emailaddr) != "example.com"';
  for (var i = 0; i < customerKeys.length; i++) {
    var customerKey = customerKeys[i];
    var tsd = TriggeredSend.Init(customerKey);
    var pause = tsd.Pause();
    var updateExclusionScript = tsd.Update({"ExclusionFilter" : exclusionScript });
    var start = tsd.Start();
    Write("<p>I paused the interaction " + customerKey + ", updated the exclusion script to " + exclusionScript + " and started the interaction so it's Running</p>");
  }
</script>
