# Build and Release Javascript Calculator

# Description
This javascript calculator logs the build and release of every connected agent to the log.

## Short Description
This javascript calculator logs the build and release of every connected agent to the log.
## APM version
APM 10.x

## License
[Apache License v 2.0](LICENSE)

# Installation Instructions

## Installation
Copy `build_and_release.js` to `EM_HOME/scripts`on all of your collectors.

Every 15 seconds a line with the build and release of every connected agent is written to the log file `build_and_release.js.log` as configured below (or `IntroscopeEnterpriseManager.log`). Therefore, you should run the calculator only for a minute (javascript calculator and the log configuration are reloaded only once a minute). Then stop the calculator by removing or moving `build_and_release.js`.

## Configuration
To get the build and release data of your agent written to a separate log file other than `IntroscopeEnterpriseManager.log`, add the following segment to the file `EM_HOME/config/IntroscopeEnterpriseManager.properties` file:

```
log4j.logger.Manager.JavaScript|build_and_release.js=DEBUG,jclogfile1
log4j.appender.jclogfile1.File=logs/build_and_release.js.log
log4j.appender.jclogfile1=com.wily.org.apache.log4j.RollingFileAppender
log4j.appender.jclogfile1.layout=com.wily.org.apache.log4j.PatternLayout
log4j.appender.jclogfile1.layout.ConversionPattern=%d{M/dd/yy hh:mm:ss.SSS a z} [%-3p] %m%n
log4j.appender.jclogfile1.MaxBackupIndex=4
log4j.appender.jclogfile1.MaxFileSize=10MB
```

## Metric description
Every 15 seconds a line with the build and release of every connected agent is written to the log file `build_and_release.js.log` as configured below (or `IntroscopeEnterpriseManager.log`).


## Support
This document and associated tools are made available from CA Technologies, a Broadcom company, as examples and provided at no charge as a courtesy to the Broadcom APM Community at large. This resource may require modification for use in your environment. However, please note that this resource is not supported by CA Technologies, and inclusion in this site should not be construed to be an endorsement or recommendation by CA Technologies. These utilities are not covered by the CA Technologies software license agreement and there is no explicit or implied warranty from CA Technologies. They can be used and distributed freely amongst the CA APM Community, but not sold. As such, they are unsupported software, provided as is without warranty of any kind, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose. CA Technologies does not warrant that this resource will meet your requirements or that the operation of the resource will be uninterrupted or error free or that any defects will be corrected. The use of this resource implies that you understand and agree to the terms listed herein.

Although these utilities are unsupported, please let us know if you have any problems or questions by adding a comment to the CA APM Community Site area where the resource is located, so that the Author(s) may attempt to address the issue or question.

Unless explicitly stated otherwise this extension is only supported on the same platforms as the APM core agent. See [APM Compatibility Guide](https://techdocs.broadcom.com/us/product-content/status/compatibility-matrix/application-performance-management-compatibility-guide.html).

### Support URL
https://github.com/CA-APM/ca-apm-build-and-release-calculator/issues

# Contributing
The [CA APM Community](https://communities.ca.com/community/ca-apm) is the primary means of interfacing with other users and with the CA APM product team.  The [developer subcommunity](https://communities.ca.com/community/ca-apm/ca-developer-apm) is where you can learn more about building APM-based assets, find code examples, and ask questions of other developers and the CA APM product team.

If you wish to contribute to this or any other project, please refer to [easy instructions](https://communities.ca.com/docs/DOC-231150910) available on the CA APM Developer Community.

## Categories
Reporting


# Change log
Changes for each version of the extension.

Version | Author | Comment
--------|--------|--------
1.0 | CA Technologies | First version of the extension.
