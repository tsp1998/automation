const mimeTypes = [
  { extension: ".323", mimeType: "text/h323" },
  { extension: ".3g2", mimeType: "video/3gpp2" },
  { extension: ".3gp", mimeType: "video/3gpp" },
  { extension: ".3gp2", mimeType: "video/3gpp2" },
  { extension: ".3gpp", mimeType: "video/3gpp" },
  { extension: ".7z", mimeType: "application/x-7z-compressed" },
  { extension: ".aa", mimeType: "audio/audible" },
  { extension: ".AAC", mimeType: "audio/aac" },
  { extension: ".aaf", mimeType: "application/octet-stream" },
  { extension: ".aax", mimeType: "audio/vnd.audible.aax" },
  { extension: ".ac3", mimeType: "audio/ac3" },
  { extension: ".aca", mimeType: "application/octet-stream" },
  { extension: ".accda", mimeType: "application/msaccess.addin" },
  { extension: ".accdb", mimeType: "application/msaccess" },
  { extension: ".accdc", mimeType: "application/msaccess.cab" },
  { extension: ".accde", mimeType: "application/msaccess" },
  { extension: ".accdr", mimeType: "application/msaccess.runtime" },
  { extension: ".accdt", mimeType: "application/msaccess" },
  { extension: ".accdw", mimeType: "application/msaccess.webapplication" },
  { extension: ".accft", mimeType: "application/msaccess.ftemplate" },
  { extension: ".acx", mimeType: "application/internet-property-stream" },
  { extension: ".AddIn", mimeType: "text/xml" },
  { extension: ".ade", mimeType: "application/msaccess" },
  { extension: ".adobebridge", mimeType: "application/x-bridge-url" },
  { extension: ".adp", mimeType: "application/msaccess" },
  { extension: ".ADT", mimeType: "audio/vnd.dlna.adts" },
  { extension: ".ADTS", mimeType: "audio/aac" },
  { extension: ".afm", mimeType: "application/octet-stream" },
  { extension: ".ai", mimeType: "application/postscript" },
  { extension: ".aif", mimeType: "audio/x-aiff" },
  { extension: ".aifc", mimeType: "audio/aiff" },
  { extension: ".aiff", mimeType: "audio/aiff" },
  { extension: ".air", mimeType: "application/vnd.adobe.air-application-installer-package+zip" },
  { extension: ".amc", mimeType: "application/x-mpeg" },
  { extension: ".application", mimeType: "application/x-ms-application" },
  { extension: ".art", mimeType: "image/x-jg" },
  { extension: ".asa", mimeType: "application/xml" },
  { extension: ".asax", mimeType: "application/xml" },
  { extension: ".ascx", mimeType: "application/xml" },
  { extension: ".asd", mimeType: "application/octet-stream" },
  { extension: ".asf", mimeType: "video/x-ms-asf" },
  { extension: ".ashx", mimeType: "application/xml" },
  { extension: ".asi", mimeType: "application/octet-stream" },
  { extension: ".asm", mimeType: "text/plain" },
  { extension: ".asmx", mimeType: "application/xml" },
  { extension: ".aspx", mimeType: "application/xml" },
  { extension: ".asr", mimeType: "video/x-ms-asf" },
  { extension: ".asx", mimeType: "video/x-ms-asf" },
  { extension: ".atom", mimeType: "application/atom+xml" },
  { extension: ".au", mimeType: "audio/basic" },
  { extension: ".avi", mimeType: "video/x-msvideo" },
  { extension: ".axs", mimeType: "application/olescript" },
  { extension: ".bas", mimeType: "text/plain" },
  { extension: ".bcpio", mimeType: "application/x-bcpio" },
  { extension: ".bin", mimeType: "application/octet-stream" },
  { extension: ".bmp", mimeType: "image/bmp" },
  { extension: ".c", mimeType: "text/plain" },
  { extension: ".cab", mimeType: "application/octet-stream" },
  { extension: ".caf", mimeType: "audio/x-caf" },
  { extension: ".calx", mimeType: "application/vnd.ms-office.calx" },
  { extension: ".cat", mimeType: "application/vnd.ms-pki.seccat" },
  { extension: ".cc", mimeType: "text/plain" },
  { extension: ".cd", mimeType: "text/plain" },
  { extension: ".cdda", mimeType: "audio/aiff" },
  { extension: ".cdf", mimeType: "application/x-cdf" },
  { extension: ".cer", mimeType: "application/x-x509-ca-cert" },
  { extension: ".chm", mimeType: "application/octet-stream" },
  { extension: ".class", mimeType: "application/x-java-applet" },
  { extension: ".clp", mimeType: "application/x-msclip" },
  { extension: ".cmx", mimeType: "image/x-cmx" },
  { extension: ".cnf", mimeType: "text/plain" },
  { extension: ".cod", mimeType: "image/cis-cod" },
  { extension: ".config", mimeType: "application/xml" },
  { extension: ".contact", mimeType: "text/x-ms-contact" },
  { extension: ".coverage", mimeType: "application/xml" },
  { extension: ".cpio", mimeType: "application/x-cpio" },
  { extension: ".cpp", mimeType: "text/plain" },
  { extension: ".crd", mimeType: "application/x-mscardfile" },
  { extension: ".crl", mimeType: "application/pkix-crl" },
  { extension: ".crt", mimeType: "application/x-x509-ca-cert" },
  { extension: ".cs", mimeType: "text/plain" },
  { extension: ".csdproj", mimeType: "text/plain" },
  { extension: ".csh", mimeType: "application/x-csh" },
  { extension: ".csproj", mimeType: "text/plain" },
  { extension: ".css", mimeType: "text/css" },
  { extension: ".csv", mimeType: "text/csv" },
  { extension: ".cur", mimeType: "application/octet-stream" },
  { extension: ".cxx", mimeType: "text/plain" },
  { extension: ".dat", mimeType: "application/octet-stream" },
  { extension: ".datasource", mimeType: "application/xml" },
  { extension: ".dbproj", mimeType: "text/plain" },
  { extension: ".dcr", mimeType: "application/x-director" },
  { extension: ".def", mimeType: "text/plain" },
  { extension: ".deploy", mimeType: "application/octet-stream" },
  { extension: ".der", mimeType: "application/x-x509-ca-cert" },
  { extension: ".dgml", mimeType: "application/xml" },
  { extension: ".dib", mimeType: "image/bmp" },
  { extension: ".dif", mimeType: "video/x-dv" },
  { extension: ".dir", mimeType: "application/x-director" },
  { extension: ".disco", mimeType: "text/xml" },
  { extension: ".dll", mimeType: "application/x-msdownload" },
  { extension: ".dll.config", mimeType: "text/xml" },
  { extension: ".dlm", mimeType: "text/dlm" },
  { extension: ".doc", mimeType: "application/msword" },
  { extension: ".docm", mimeType: "application/vnd.ms-word.document.macroEnabled.12" },
  { extension: ".docx", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
  { extension: ".dot", mimeType: "application/msword" },
  { extension: ".dotm", mimeType: "application/vnd.ms-word.template.macroEnabled.12" },
  { extension: ".dotx", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.template" },
  { extension: ".dsp", mimeType: "application/octet-stream" },
  { extension: ".dsw", mimeType: "text/plain" },
  { extension: ".dtd", mimeType: "text/xml" },
  { extension: ".dtsConfig", mimeType: "text/xml" },
  { extension: ".dv", mimeType: "video/x-dv" },
  { extension: ".dvi", mimeType: "application/x-dvi" },
  { extension: ".dwf", mimeType: "drawing/x-dwf" },
  { extension: ".dwp", mimeType: "application/octet-stream" },
  { extension: ".dxr", mimeType: "application/x-director" },
  { extension: ".eml", mimeType: "message/rfc822" },
  { extension: ".emz", mimeType: "application/octet-stream" },
  { extension: ".eot", mimeType: "application/octet-stream" },
  { extension: ".eps", mimeType: "application/postscript" },
  { extension: ".etl", mimeType: "application/etl" },
  { extension: ".etx", mimeType: "text/x-setext" },
  { extension: ".evy", mimeType: "application/envoy" },
  { extension: ".exe", mimeType: "application/octet-stream" },
  { extension: ".exe.config", mimeType: "text/xml" },
  { extension: ".fdf", mimeType: "application/vnd.fdf" },
  { extension: ".fif", mimeType: "application/fractals" },
  { extension: ".filters", mimeType: "Application/xml" },
  { extension: ".fla", mimeType: "application/octet-stream" },
  { extension: ".flr", mimeType: "x-world/x-vrml" },
  { extension: ".flv", mimeType: "video/x-flv" },
  { extension: ".fsscript", mimeType: "application/fsharp-script" },
  { extension: ".fsx", mimeType: "application/fsharp-script" },
  { extension: ".generictest", mimeType: "application/xml" },
  { extension: ".gif", mimeType: "image/gif" },
  { extension: ".group", mimeType: "text/x-ms-group" },
  { extension: ".gsm", mimeType: "audio/x-gsm" },
  { extension: ".gtar", mimeType: "application/x-gtar" },
  { extension: ".gz", mimeType: "application/x-gzip" },
  { extension: ".h", mimeType: "text/plain" },
  { extension: ".hdf", mimeType: "application/x-hdf" },
  { extension: ".hdml", mimeType: "text/x-hdml" },
  { extension: ".hhc", mimeType: "application/x-oleobject" },
  { extension: ".hhk", mimeType: "application/octet-stream" },
  { extension: ".hhp", mimeType: "application/octet-stream" },
  { extension: ".hlp", mimeType: "application/winhlp" },
  { extension: ".hpp", mimeType: "text/plain" },
  { extension: ".hqx", mimeType: "application/mac-binhex40" },
  { extension: ".hta", mimeType: "application/hta" },
  { extension: ".htc", mimeType: "text/x-component" },
  { extension: ".htm", mimeType: "text/html" },
  { extension: ".html", mimeType: "text/html" },
  { extension: ".htt", mimeType: "text/webviewhtml" },
  { extension: ".hxa", mimeType: "application/xml" },
  { extension: ".hxc", mimeType: "application/xml" },
  { extension: ".hxd", mimeType: "application/octet-stream" },
  { extension: ".hxe", mimeType: "application/xml" },
  { extension: ".hxf", mimeType: "application/xml" },
  { extension: ".hxh", mimeType: "application/octet-stream" },
  { extension: ".hxi", mimeType: "application/octet-stream" },
  { extension: ".hxk", mimeType: "application/xml" },
  { extension: ".hxq", mimeType: "application/octet-stream" },
  { extension: ".hxr", mimeType: "application/octet-stream" },
  { extension: ".hxs", mimeType: "application/octet-stream" },
  { extension: ".hxt", mimeType: "text/html" },
  { extension: ".hxv", mimeType: "application/xml" },
  { extension: ".hxw", mimeType: "application/octet-stream" },
  { extension: ".hxx", mimeType: "text/plain" },
  { extension: ".i", mimeType: "text/plain" },
  { extension: ".ico", mimeType: "image/x-icon" },
  { extension: ".ics", mimeType: "application/octet-stream" },
  { extension: ".idl", mimeType: "text/plain" },
  { extension: ".ief", mimeType: "image/ief" },
  { extension: ".iii", mimeType: "application/x-iphone" },
  { extension: ".inc", mimeType: "text/plain" },
  { extension: ".inf", mimeType: "application/octet-stream" },
  { extension: ".inl", mimeType: "text/plain" },
  { extension: ".ins", mimeType: "application/x-internet-signup" },
  { extension: ".ipa", mimeType: "application/x-itunes-ipa" },
  { extension: ".ipg", mimeType: "application/x-itunes-ipg" },
  { extension: ".ipproj", mimeType: "text/plain" },
  { extension: ".ipsw", mimeType: "application/x-itunes-ipsw" },
  { extension: ".iqy", mimeType: "text/x-ms-iqy" },
  { extension: ".isp", mimeType: "application/x-internet-signup" },
  { extension: ".ite", mimeType: "application/x-itunes-ite" },
  { extension: ".itlp", mimeType: "application/x-itunes-itlp" },
  { extension: ".itms", mimeType: "application/x-itunes-itms" },
  { extension: ".itpc", mimeType: "application/x-itunes-itpc" },
  { extension: ".IVF", mimeType: "video/x-ivf" },
  { extension: ".jar", mimeType: "application/java-archive" },
  { extension: ".java", mimeType: "application/octet-stream" },
  { extension: ".jck", mimeType: "application/liquidmotion" },
  { extension: ".jcz", mimeType: "application/liquidmotion" },
  { extension: ".jfif", mimeType: "image/pjpeg" },
  { extension: ".jnlp", mimeType: "application/x-java-jnlp-file" },
  { extension: ".jpb", mimeType: "application/octet-stream" },
  { extension: ".jpe", mimeType: "image/jpeg" },
  { extension: ".jpeg", mimeType: "image/jpeg" },
  { extension: ".jpg", mimeType: "image/jpeg" },
  { extension: ".js", mimeType: "application/x-javascript" },
  { extension: ".jsx", mimeType: "text/jscript" },
  { extension: ".jsxbin", mimeType: "text/plain" },
  { extension: ".latex", mimeType: "application/x-latex" },
  { extension: ".library-ms", mimeType: "application/windows-library+xml" },
  { extension: ".lit", mimeType: "application/x-ms-reader" },
  { extension: ".loadtest", mimeType: "application/xml" },
  { extension: ".lpk", mimeType: "application/octet-stream" },
  { extension: ".lsf", mimeType: "video/x-la-asf" },
  { extension: ".lst", mimeType: "text/plain" },
  { extension: ".lsx", mimeType: "video/x-la-asf" },
  { extension: ".lzh", mimeType: "application/octet-stream" },
  { extension: ".m13", mimeType: "application/x-msmediaview" },
  { extension: ".m14", mimeType: "application/x-msmediaview" },
  { extension: ".m1v", mimeType: "video/mpeg" },
  { extension: ".m2t", mimeType: "video/vnd.dlna.mpeg-tts" },
  { extension: ".m2ts", mimeType: "video/vnd.dlna.mpeg-tts" },
  { extension: ".m2v", mimeType: "video/mpeg" },
  { extension: ".m3u", mimeType: "audio/x-mpegurl" },
  { extension: ".m3u8", mimeType: "audio/x-mpegurl" },
  { extension: ".m4a", mimeType: "audio/m4a" },
  { extension: ".m4b", mimeType: "audio/m4b" },
  { extension: ".m4p", mimeType: "audio/m4p" },
  { extension: ".m4r", mimeType: "audio/x-m4r" },
  { extension: ".m4v", mimeType: "video/x-m4v" },
  { extension: ".mac", mimeType: "image/x-macpaint" },
  { extension: ".mak", mimeType: "text/plain" },
  { extension: ".man", mimeType: "application/x-troff-man" },
  { extension: ".manifest", mimeType: "application/x-ms-manifest" },
  { extension: ".map", mimeType: "text/plain" },
  { extension: ".master", mimeType: "application/xml" },
  { extension: ".mda", mimeType: "application/msaccess" },
  { extension: ".mdb", mimeType: "application/x-msaccess" },
  { extension: ".mde", mimeType: "application/msaccess" },
  { extension: ".mdp", mimeType: "application/octet-stream" },
  { extension: ".me", mimeType: "application/x-troff-me" },
  { extension: ".mfp", mimeType: "application/x-shockwave-flash" },
  { extension: ".mht", mimeType: "message/rfc822" },
  { extension: ".mhtml", mimeType: "message/rfc822" },
  { extension: ".mid", mimeType: "audio/mid" },
  { extension: ".midi", mimeType: "audio/mid" },
  { extension: ".mix", mimeType: "application/octet-stream" },
  { extension: ".mk", mimeType: "text/plain" },
  { extension: ".mmf", mimeType: "application/x-smaf" },
  { extension: ".mno", mimeType: "text/xml" },
  { extension: ".mny", mimeType: "application/x-msmoney" },
  { extension: ".mod", mimeType: "video/mpeg" },
  { extension: ".mov", mimeType: "video/quicktime" },
  { extension: ".movie", mimeType: "video/x-sgi-movie" },
  { extension: ".mp2", mimeType: "video/mpeg" },
  { extension: ".mp2v", mimeType: "video/mpeg" },
  { extension: ".mp3", mimeType: "audio/mpeg" },
  { extension: ".mp4", mimeType: "video/mp4" },
  { extension: ".mp4v", mimeType: "video/mp4" },
  { extension: ".mpa", mimeType: "video/mpeg" },
  { extension: ".mpe", mimeType: "video/mpeg" },
  { extension: ".mpeg", mimeType: "video/mpeg" },
  { extension: ".mpf", mimeType: "application/vnd.ms-mediapackage" },
  { extension: ".mpg", mimeType: "video/mpeg" },
  { extension: ".mpp", mimeType: "application/vnd.ms-project" },
  { extension: ".mpv2", mimeType: "video/mpeg" },
  { extension: ".mqv", mimeType: "video/quicktime" },
  { extension: ".ms", mimeType: "application/x-troff-ms" },
  { extension: ".msi", mimeType: "application/octet-stream" },
  { extension: ".mso", mimeType: "application/octet-stream" },
  { extension: ".mts", mimeType: "video/vnd.dlna.mpeg-tts" },
  { extension: ".mtx", mimeType: "application/xml" },
  { extension: ".mvb", mimeType: "application/x-msmediaview" },
  { extension: ".mvc", mimeType: "application/x-miva-compiled" },
  { extension: ".mxp", mimeType: "application/x-mmxp" },
  { extension: ".nc", mimeType: "application/x-netcdf" },
  { extension: ".nsc", mimeType: "video/x-ms-asf" },
  { extension: ".nws", mimeType: "message/rfc822" },
  { extension: ".ocx", mimeType: "application/octet-stream" },
  { extension: ".oda", mimeType: "application/oda" },
  { extension: ".odc", mimeType: "text/x-ms-odc" },
  { extension: ".odh", mimeType: "text/plain" },
  { extension: ".odl", mimeType: "text/plain" },
  { extension: ".odp", mimeType: "application/vnd.oasis.opendocument.presentation" },
  { extension: ".ods", mimeType: "application/oleobject" },
  { extension: ".odt", mimeType: "application/vnd.oasis.opendocument.text" },
  { extension: ".one", mimeType: "application/onenote" },
  { extension: ".onea", mimeType: "application/onenote" },
  { extension: ".onepkg", mimeType: "application/onenote" },
  { extension: ".onetmp", mimeType: "application/onenote" },
  { extension: ".onetoc", mimeType: "application/onenote" },
  { extension: ".onetoc2", mimeType: "application/onenote" },
  { extension: ".orderedtest", mimeType: "application/xml" },
  { extension: ".osdx", mimeType: "application/opensearchdescription+xml" },
  { extension: ".p10", mimeType: "application/pkcs10" },
  { extension: ".p12", mimeType: "application/x-pkcs12" },
  { extension: ".p7b", mimeType: "application/x-pkcs7-certificates" },
  { extension: ".p7c", mimeType: "application/pkcs7-mime" },
  { extension: ".p7m", mimeType: "application/pkcs7-mime" },
  { extension: ".p7r", mimeType: "application/x-pkcs7-certreqresp" },
  { extension: ".p7s", mimeType: "application/pkcs7-signature" },
  { extension: ".pbm", mimeType: "image/x-portable-bitmap" },
  { extension: ".pcast", mimeType: "application/x-podcast" },
  { extension: ".pct", mimeType: "image/pict" },
  { extension: ".pcx", mimeType: "application/octet-stream" },
  { extension: ".pcz", mimeType: "application/octet-stream" },
  { extension: ".pdf", mimeType: "application/pdf" },
  { extension: ".pfb", mimeType: "application/octet-stream" },
  { extension: ".pfm", mimeType: "application/octet-stream" },
  { extension: ".pfx", mimeType: "application/x-pkcs12" },
  { extension: ".pgm", mimeType: "image/x-portable-graymap" },
  { extension: ".pic", mimeType: "image/pict" },
  { extension: ".pict", mimeType: "image/pict" },
  { extension: ".pkgdef", mimeType: "text/plain" },
  { extension: ".pkgundef", mimeType: "text/plain" },
  { extension: ".pko", mimeType: "application/vnd.ms-pki.pko" },
  { extension: ".pls", mimeType: "audio/scpls" },
  { extension: ".pma", mimeType: "application/x-perfmon" },
  { extension: ".pmc", mimeType: "application/x-perfmon" },
  { extension: ".pml", mimeType: "application/x-perfmon" },
  { extension: ".pmr", mimeType: "application/x-perfmon" },
  { extension: ".pmw", mimeType: "application/x-perfmon" },
  { extension: ".png", mimeType: "image/png" },
  { extension: ".pnm", mimeType: "image/x-portable-anymap" },
  { extension: ".pnt", mimeType: "image/x-macpaint" },
  { extension: ".pntg", mimeType: "image/x-macpaint" },
  { extension: ".pnz", mimeType: "image/png" },
  { extension: ".pot", mimeType: "application/vnd.ms-powerpoint" },
  { extension: ".potm", mimeType: "application/vnd.ms-powerpoint.template.macroEnabled.12" },
  { extension: ".potx", mimeType: "application/vnd.openxmlformats-officedocument.presentationml.template" },
  { extension: ".ppa", mimeType: "application/vnd.ms-powerpoint" },
  { extension: ".ppam", mimeType: "application/vnd.ms-powerpoint.addin.macroEnabled.12" },
  { extension: ".ppm", mimeType: "image/x-portable-pixmap" },
  { extension: ".pps", mimeType: "application/vnd.ms-powerpoint" },
  { extension: ".ppsm", mimeType: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12" },
  { extension: ".ppsx", mimeType: "application/vnd.openxmlformats-officedocument.presentationml.slideshow" },
  { extension: ".ppt", mimeType: "application/vnd.ms-powerpoint" },
  { extension: ".pptm", mimeType: "application/vnd.ms-powerpoint.presentation.macroEnabled.12" },
  { extension: ".pptx", mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation" },
  { extension: ".prf", mimeType: "application/pics-rules" },
  { extension: ".prm", mimeType: "application/octet-stream" },
  { extension: ".prx", mimeType: "application/octet-stream" },
  { extension: ".ps", mimeType: "application/postscript" },
  { extension: ".psc1", mimeType: "application/PowerShell" },
  { extension: ".psd", mimeType: "application/octet-stream" },
  { extension: ".psess", mimeType: "application/xml" },
  { extension: ".psm", mimeType: "application/octet-stream" },
  { extension: ".psp", mimeType: "application/octet-stream" },
  { extension: ".pub", mimeType: "application/x-mspublisher" },
  { extension: ".pwz", mimeType: "application/vnd.ms-powerpoint" },
  { extension: ".qht", mimeType: "text/x-html-insertion" },
  { extension: ".qhtm", mimeType: "text/x-html-insertion" },
  { extension: ".qt", mimeType: "video/quicktime" },
  { extension: ".qti", mimeType: "image/x-quicktime" },
  { extension: ".qtif", mimeType: "image/x-quicktime" },
  { extension: ".qtl", mimeType: "application/x-quicktimeplayer" },
  { extension: ".qxd", mimeType: "application/octet-stream" },
  { extension: ".ra", mimeType: "audio/x-pn-realaudio" },
  { extension: ".ram", mimeType: "audio/x-pn-realaudio" },
  { extension: ".rar", mimeType: "application/octet-stream" },
  { extension: ".ras", mimeType: "image/x-cmu-raster" },
  { extension: ".rat", mimeType: "application/rat-file" },
  { extension: ".rc", mimeType: "text/plain" },
  { extension: ".rc2", mimeType: "text/plain" },
  { extension: ".rct", mimeType: "text/plain" },
  { extension: ".rdlc", mimeType: "application/xml" },
  { extension: ".resx", mimeType: "application/xml" },
  { extension: ".rf", mimeType: "image/vnd.rn-realflash" },
  { extension: ".rgb", mimeType: "image/x-rgb" },
  { extension: ".rgs", mimeType: "text/plain" },
  { extension: ".rm", mimeType: "application/vnd.rn-realmedia" },
  { extension: ".rmi", mimeType: "audio/mid" },
  { extension: ".rmp", mimeType: "application/vnd.rn-rn_music_package" },
  { extension: ".roff", mimeType: "application/x-troff" },
  { extension: ".rpm", mimeType: "audio/x-pn-realaudio-plugin" },
  { extension: ".rqy", mimeType: "text/x-ms-rqy" },
  { extension: ".rtf", mimeType: "application/rtf" },
  { extension: ".rtx", mimeType: "text/richtext" },
  { extension: ".ruleset", mimeType: "application/xml" },
  { extension: ".s", mimeType: "text/plain" },
  { extension: ".safariextz", mimeType: "application/x-safari-safariextz" },
  { extension: ".scd", mimeType: "application/x-msschedule" },
  { extension: ".sct", mimeType: "text/scriptlet" },
  { extension: ".sd2", mimeType: "audio/x-sd2" },
  { extension: ".sdp", mimeType: "application/sdp" },
  { extension: ".sea", mimeType: "application/octet-stream" },
  { extension: ".searchConnector-ms", mimeType: "application/windows-search-connector+xml" },
  { extension: ".setpay", mimeType: "application/set-payment-initiation" },
  { extension: ".setreg", mimeType: "application/set-registration-initiation" },
  { extension: ".settings", mimeType: "application/xml" },
  { extension: ".sgimb", mimeType: "application/x-sgimb" },
  { extension: ".sgml", mimeType: "text/sgml" },
  { extension: ".sh", mimeType: "application/x-sh" },
  { extension: ".shar", mimeType: "application/x-shar" },
  { extension: ".shtml", mimeType: "text/html" },
  { extension: ".sit", mimeType: "application/x-stuffit" },
  { extension: ".sitemap", mimeType: "application/xml" },
  { extension: ".skin", mimeType: "application/xml" },
  { extension: ".sldm", mimeType: "application/vnd.ms-powerpoint.slide.macroEnabled.12" },
  { extension: ".sldx", mimeType: "application/vnd.openxmlformats-officedocument.presentationml.slide" },
  { extension: ".slk", mimeType: "application/vnd.ms-excel" },
  { extension: ".sln", mimeType: "text/plain" },
  { extension: ".slupkg-ms", mimeType: "application/x-ms-license" },
  { extension: ".smd", mimeType: "audio/x-smd" },
  { extension: ".smi", mimeType: "application/octet-stream" },
  { extension: ".smx", mimeType: "audio/x-smd" },
  { extension: ".smz", mimeType: "audio/x-smd" },
  { extension: ".snd", mimeType: "audio/basic" },
  { extension: ".snippet", mimeType: "application/xml" },
  { extension: ".snp", mimeType: "application/octet-stream" },
  { extension: ".sol", mimeType: "text/plain" },
  { extension: ".sor", mimeType: "text/plain" },
  { extension: ".spc", mimeType: "application/x-pkcs7-certificates" },
  { extension: ".spl", mimeType: "application/futuresplash" },
  { extension: ".src", mimeType: "application/x-wais-source" },
  { extension: ".srf", mimeType: "text/plain" },
  { extension: ".SSISDeploymentManifest", mimeType: "text/xml" },
  { extension: ".ssm", mimeType: "application/streamingmedia" },
  { extension: ".sst", mimeType: "application/vnd.ms-pki.certstore" },
  { extension: ".stl", mimeType: "application/vnd.ms-pki.stl" },
  { extension: ".sv4cpio", mimeType: "application/x-sv4cpio" },
  { extension: ".sv4crc", mimeType: "application/x-sv4crc" },
  { extension: ".svc", mimeType: "application/xml" },
  { extension: ".swf", mimeType: "application/x-shockwave-flash" },
  { extension: ".t", mimeType: "application/x-troff" },
  { extension: ".tar", mimeType: "application/x-tar" },
  { extension: ".tcl", mimeType: "application/x-tcl" },
  { extension: ".testrunconfig", mimeType: "application/xml" },
  { extension: ".testsettings", mimeType: "application/xml" },
  { extension: ".tex", mimeType: "application/x-tex" },
  { extension: ".texi", mimeType: "application/x-texinfo" },
  { extension: ".texinfo", mimeType: "application/x-texinfo" },
  { extension: ".tgz", mimeType: "application/x-compressed" },
  { extension: ".thmx", mimeType: "application/vnd.ms-officetheme" },
  { extension: ".thn", mimeType: "application/octet-stream" },
  { extension: ".tif", mimeType: "image/tiff" },
  { extension: ".tiff", mimeType: "image/tiff" },
  { extension: ".tlh", mimeType: "text/plain" },
  { extension: ".tli", mimeType: "text/plain" },
  { extension: ".toc", mimeType: "application/octet-stream" },
  { extension: ".tr", mimeType: "application/x-troff" },
  { extension: ".trm", mimeType: "application/x-msterminal" },
  { extension: ".trx", mimeType: "application/xml" },
  { extension: ".ts", mimeType: "video/vnd.dlna.mpeg-tts" },
  { extension: ".tsv", mimeType: "text/tab-separated-values" },
  { extension: ".ttf", mimeType: "application/octet-stream" },
  { extension: ".tts", mimeType: "video/vnd.dlna.mpeg-tts" },
  { extension: ".txt", mimeType: "text/plain" },
  { extension: ".u32", mimeType: "application/octet-stream" },
  { extension: ".uls", mimeType: "text/iuls" },
  { extension: ".user", mimeType: "text/plain" },
  { extension: ".ustar", mimeType: "application/x-ustar" },
  { extension: ".vb", mimeType: "text/plain" },
  { extension: ".vbdproj", mimeType: "text/plain" },
  { extension: ".vbk", mimeType: "video/mpeg" },
  { extension: ".vbproj", mimeType: "text/plain" },
  { extension: ".vbs", mimeType: "text/vbscript" },
  { extension: ".vcf", mimeType: "text/x-vcard" },
  { extension: ".vcproj", mimeType: "Application/xml" },
  { extension: ".vcs", mimeType: "text/plain" },
  { extension: ".vcxproj", mimeType: "Application/xml" },
  { extension: ".vddproj", mimeType: "text/plain" },
  { extension: ".vdp", mimeType: "text/plain" },
  { extension: ".vdproj", mimeType: "text/plain" },
  { extension: ".vdx", mimeType: "application/vnd.ms-visio.viewer" },
  { extension: ".vml", mimeType: "text/xml" },
  { extension: ".vscontent", mimeType: "application/xml" },
  { extension: ".vsct", mimeType: "text/xml" },
  { extension: ".vsd", mimeType: "application/vnd.visio" },
  { extension: ".vsi", mimeType: "application/ms-vsi" },
  { extension: ".vsix", mimeType: "application/vsix" },
  { extension: ".vsixlangpack", mimeType: "text/xml" },
  { extension: ".vsixmanifest", mimeType: "text/xml" },
  { extension: ".vsmdi", mimeType: "application/xml" },
  { extension: ".vspscc", mimeType: "text/plain" },
  { extension: ".vss", mimeType: "application/vnd.visio" },
  { extension: ".vsscc", mimeType: "text/plain" },
  { extension: ".vssettings", mimeType: "text/xml" },
  { extension: ".vssscc", mimeType: "text/plain" },
  { extension: ".vst", mimeType: "application/vnd.visio" },
  { extension: ".vstemplate", mimeType: "text/xml" },
  { extension: ".vsto", mimeType: "application/x-ms-vsto" },
  { extension: ".vsw", mimeType: "application/vnd.visio" },
  { extension: ".vsx", mimeType: "application/vnd.visio" },
  { extension: ".vtx", mimeType: "application/vnd.visio" },
  { extension: ".wav", mimeType: "audio/wav" },
  { extension: ".wave", mimeType: "audio/wav" },
  { extension: ".wax", mimeType: "audio/x-ms-wax" },
  { extension: ".wbk", mimeType: "application/msword" },
  { extension: ".wbmp", mimeType: "image/vnd.wap.wbmp" },
  { extension: ".wcm", mimeType: "application/vnd.ms-works" },
  { extension: ".wdb", mimeType: "application/vnd.ms-works" },
  { extension: ".wdp", mimeType: "image/vnd.ms-photo" },
  { extension: ".webarchive", mimeType: "application/x-safari-webarchive" },
  { extension: ".webtest", mimeType: "application/xml" },
  { extension: ".wiq", mimeType: "application/xml" },
  { extension: ".wiz", mimeType: "application/msword" },
  { extension: ".wks", mimeType: "application/vnd.ms-works" },
  { extension: ".WLMP", mimeType: "application/wlmoviemaker" },
  { extension: ".wlpginstall", mimeType: "application/x-wlpg-detect" },
  { extension: ".wlpginstall3", mimeType: "application/x-wlpg3-detect" },
  { extension: ".wm", mimeType: "video/x-ms-wm" },
  { extension: ".wma", mimeType: "audio/x-ms-wma" },
  { extension: ".wmd", mimeType: "application/x-ms-wmd" },
  { extension: ".wmf", mimeType: "application/x-msmetafile" },
  { extension: ".wml", mimeType: "text/vnd.wap.wml" },
  { extension: ".wmlc", mimeType: "application/vnd.wap.wmlc" },
  { extension: ".wmls", mimeType: "text/vnd.wap.wmlscript" },
  { extension: ".wmlsc", mimeType: "application/vnd.wap.wmlscriptc" },
  { extension: ".wmp", mimeType: "video/x-ms-wmp" },
  { extension: ".wmv", mimeType: "video/x-ms-wmv" },
  { extension: ".wmx", mimeType: "video/x-ms-wmx" },
  { extension: ".wmz", mimeType: "application/x-ms-wmz" },
  { extension: ".wpl", mimeType: "application/vnd.ms-wpl" },
  { extension: ".wps", mimeType: "application/vnd.ms-works" },
  { extension: ".wri", mimeType: "application/x-mswrite" },
  { extension: ".wrl", mimeType: "x-world/x-vrml" },
  { extension: ".wrz", mimeType: "x-world/x-vrml" },
  { extension: ".wsc", mimeType: "text/scriptlet" },
  { extension: ".wsdl", mimeType: "text/xml" },
  { extension: ".wvx", mimeType: "video/x-ms-wvx" },
  { extension: ".x", mimeType: "application/directx" },
  { extension: ".xaf", mimeType: "x-world/x-vrml" },
  { extension: ".xaml", mimeType: "application/xaml+xml" },
  { extension: ".xap", mimeType: "application/x-silverlight-app" },
  { extension: ".xbap", mimeType: "application/x-ms-xbap" },
  { extension: ".xbm", mimeType: "image/x-xbitmap" },
  { extension: ".xdr", mimeType: "text/plain" },
  { extension: ".xht", mimeType: "application/xhtml+xml" },
  { extension: ".xhtml", mimeType: "application/xhtml+xml" },
  { extension: ".xla", mimeType: "application/vnd.ms-excel" },
  { extension: ".xlam", mimeType: "application/vnd.ms-excel.addin.macroEnabled.12" },
  { extension: ".xlc", mimeType: "application/vnd.ms-excel" },
  { extension: ".xld", mimeType: "application/vnd.ms-excel" },
  { extension: ".xlk", mimeType: "application/vnd.ms-excel" },
  { extension: ".xll", mimeType: "application/vnd.ms-excel" },
  { extension: ".xlm", mimeType: "application/vnd.ms-excel" },
  { extension: ".xls", mimeType: "application/vnd.ms-excel" },
  { extension: ".xlsb", mimeType: "application/vnd.ms-excel.sheet.binary.macroEnabled.12" },
  { extension: ".xlsm", mimeType: "application/vnd.ms-excel.sheet.macroEnabled.12" },
  { extension: ".xlsx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
  { extension: ".xlt", mimeType: "application/vnd.ms-excel" },
  { extension: ".xltm", mimeType: "application/vnd.ms-excel.template.macroEnabled.12" },
  { extension: ".xltx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.template" },
  { extension: ".xlw", mimeType: "application/vnd.ms-excel" },
  { extension: ".xml", mimeType: "text/xml" },
  { extension: ".xmta", mimeType: "application/xml" },
  { extension: ".xof", mimeType: "x-world/x-vrml" },
  { extension: ".XOML", mimeType: "text/plain" },
  { extension: ".xpm", mimeType: "image/x-xpixmap" },
  { extension: ".xps", mimeType: "application/vnd.ms-xpsdocument" },
  { extension: ".xrm-ms", mimeType: "text/xml" },
  { extension: ".xsc", mimeType: "application/xml" },
  { extension: ".xsd", mimeType: "text/xml" },
  { extension: ".xsf", mimeType: "text/xml" },
  { extension: ".xsl", mimeType: "text/xml" },
  { extension: ".xslt", mimeType: "text/xml" },
  { extension: ".xsn", mimeType: "application/octet-stream" },
  { extension: ".xss", mimeType: "application/xml" },
  { extension: ".xtp", mimeType: "application/octet-stream" },
  { extension: ".xwd", mimeType: "image/x-xwindowdump" },
  { extension: ".z", mimeType: "application/x-compress" },
  { extension: ".zip", mimeType: "application/x-zip-compressed" }
]

exports.getExtensionOrMimeType = (extensionOrMimeType) => {
  for (const record of mimeTypes) {
    if (record.extension === extensionOrMimeType) {
     return record.mimeType 
    }
    if (record.mimeType === extensionOrMimeType) {
     return record.extension 
    }
  }
  return ''
}