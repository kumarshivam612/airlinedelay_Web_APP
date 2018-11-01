document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d98fe556-1bab-4c7d-9057-6a0a22477c7f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd98fe556-1bab-4c7d-9057-6a0a22477c7f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"7ead0c54-99d6-4e6a-9f71-e3bd58f5ae10":{"roots":{"references":[{"attributes":{"data_source":{"id":"c3c3bf40-d10a-471c-b62e-415f67ac4a07","type":"ColumnDataSource"},"glyph":{"id":"130796b0-a1d1-43a5-9084-15ef4ada1774","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d227a34f-332d-4be0-bf99-68cf09b9129f","type":"GlyphRenderer"},{"attributes":{},"id":"2ea36dac-39f5-479d-b645-9b352c7c268c","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[12],"y":["Friday"]}},"id":"c944c4d3-44d4-48b9-a4d4-80ae1850ea81","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"d9535928-a446-4a5f-816d-77c17b03ee99","type":"BasicTickFormatter"},"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"},"ticker":{"id":"1b8660be-e4c2-4948-b464-a320d146e4da","type":"BasicTicker"}},"id":"bda33ed5-0ea3-448b-a8ce-189a8d14936d","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"b8884649-c041-4805-bdfc-0921d92ca65e","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.142857142857143,1.5,1.7777777777777777,0.0,2.2941176470588234,1.25,0.0,0.0,0.0,0.0,0.0,0.47058823529411764,0.0,0.0,2.3333333333333335,2.0,0.6666666666666666,2.3333333333333335,2.3333333333333335,0.0,0.4444444444444444,0.875,0.0,1.0,0.0,0.0],"x":[7,10,14,10,11,10,12,13,14,6,10,11,12,14,7,10,14,7,10,11,12,17,10,12,13,14],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"63109a78-2fdb-44d7-ab26-5740d2440019","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"}},"id":"01a40c78-2e0f-426a-9db8-909c1d18a618","type":"PanTool"},{"attributes":{"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"}},"id":"a40d1914-3b1d-40c8-8877-b54e63826a10","type":"HelpTool"},{"attributes":{"data_source":{"id":"0fb51783-25ce-43d7-8758-51c512b2c404","type":"ColumnDataSource"},"glyph":{"id":"9eb9fe8b-f430-41c6-adcb-4e35a6179d68","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f354387b-dc99-4c04-900a-9b56fbf987fa","type":"GlyphRenderer"},{"attributes":{},"id":"fa85105a-0d1f-4229-a641-8726cf4cd7f3","type":"ToolEvents"},{"attributes":{"data_source":{"id":"5f39198c-09a0-457f-b6bc-4ae3d5c4e001","type":"ColumnDataSource"},"glyph":{"id":"36690fd6-cb35-48de-a9e1-7bc047d664d8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"91fef167-b03c-48d6-a603-f230a91b7779","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"41ba1e1c-6d5a-4029-a389-d85324e104f8","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"},"ticker":{"id":"ec92c10d-f89d-4f98-84e0-8b67229d91cd","type":"CategoricalTicker"}},"id":"81603f59-d8b0-47da-9334-1bba184284eb","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"}},"id":"d8a34a61-bd66-4560-82ba-ee215c0c707d","type":"SaveTool"},{"attributes":{"overlay":{"id":"8582ad88-2463-47ea-af0f-8776db2608c2","type":"BoxAnnotation"},"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"}},"id":"f5897336-20da-4e3f-ba74-1db1f9e4ed61","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b45cac35-261e-4373-8652-082177f24d22","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.1875,5.0,6.6,4.666666666666667],"x":[11,12,7,13],"y":["Monday","Monday","Thursday","Saturday"]}},"id":"c50fb671-b5e1-4c9c-8739-06c681fc3839","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47dabfbe-a618-4cc3-ad9a-352312748ab5","type":"ColumnDataSource"},"glyph":{"id":"8f7162a8-d0e3-409e-bf82-b06efd29bba3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"46378be3-dea0-4ef2-b33e-d8517f2ba703","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"8ab7c356-dca3-499f-8252-5fb83277b725","type":"LinearColorMapper"},"formatter":{"id":"6c762862-3697-4f3f-b22c-82f76ee82b47","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"},"ticker":{"id":"f6c2e091-c36d-4844-8e1e-340b6c22eafd","type":"BasicTicker"}},"id":"34b21cb0-5480-447c-a55d-6b22752c8835","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[12],"y":["Friday"]}},"id":"7df74a7f-954c-47cf-a869-ac3518dfaca1","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"bda33ed5-0ea3-448b-a8ce-189a8d14936d","type":"LinearAxis"}],"left":[{"id":"81603f59-d8b0-47da-9334-1bba184284eb","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"8582ad88-2463-47ea-af0f-8776db2608c2","type":"BoxAnnotation"},{"id":"3fb06b4e-98f0-4fb2-afb2-24a5ce022f6a","type":"GlyphRenderer"},{"id":"46378be3-dea0-4ef2-b33e-d8517f2ba703","type":"GlyphRenderer"},{"id":"dc9c7592-2eb0-4c82-9811-d1e1c9e064af","type":"GlyphRenderer"},{"id":"b85f84c1-a5b0-450a-9bd7-4a3bcdb49818","type":"GlyphRenderer"},{"id":"d227a34f-332d-4be0-bf99-68cf09b9129f","type":"GlyphRenderer"},{"id":"91fef167-b03c-48d6-a603-f230a91b7779","type":"GlyphRenderer"},{"id":"d7147e4e-41f9-40f3-9f2d-4f2afdd8dec5","type":"GlyphRenderer"},{"id":"bda33ed5-0ea3-448b-a8ce-189a8d14936d","type":"LinearAxis"},{"id":"81603f59-d8b0-47da-9334-1bba184284eb","type":"CategoricalAxis"},{"id":"94701c33-bd72-4ec8-b37b-028b15748614","type":"ColorBar"}],"right":[{"id":"94701c33-bd72-4ec8-b37b-028b15748614","type":"ColorBar"}],"title":{"id":"b8884649-c041-4805-bdfc-0921d92ca65e","type":"Title"},"tool_events":{"id":"fa85105a-0d1f-4229-a641-8726cf4cd7f3","type":"ToolEvents"},"toolbar":{"id":"173185b8-3ce6-48be-8109-820bd5b7c4c2","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f7c57efc-d076-4240-97d1-3e5f72521f71","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"9e3e22df-bc81-47e1-ad69-00fab693ce46","type":"FactorRange"}},"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"}},"id":"a5cc3d68-474b-4c2f-8bfb-1fa2cc1ee447","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac75ffb0-2dc0-4a34-ac90-f950e3266621","type":"Rect"},{"attributes":{"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"}},"id":"7f3438d1-8191-41f9-938f-2141acff1de8","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"0fe2ba5d-cd6b-47bb-92dc-dc1ff3b468a2","type":"LinearAxis"}],"left":[{"id":"5fcc20c0-0d82-44ab-98fd-bd8521fa61fc","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"c2d40e9b-c40b-458e-bf23-46cac6cc4942","type":"BoxAnnotation"},{"id":"078c9ad8-9949-4a03-99d5-9f0a5bb952ba","type":"GlyphRenderer"},{"id":"9ac35465-ea87-44ac-aa73-a4734fcbe1ac","type":"GlyphRenderer"},{"id":"3a487b02-4627-42fe-9f6f-82612b5988f0","type":"GlyphRenderer"},{"id":"70507635-c630-4bd4-8387-950fb582c190","type":"GlyphRenderer"},{"id":"f354387b-dc99-4c04-900a-9b56fbf987fa","type":"GlyphRenderer"},{"id":"50df94f4-7497-4b56-8ca2-0b982a8d3673","type":"GlyphRenderer"},{"id":"69d9c656-de34-4aa9-b4c9-913e4e609e54","type":"GlyphRenderer"},{"id":"0fe2ba5d-cd6b-47bb-92dc-dc1ff3b468a2","type":"LinearAxis"},{"id":"5fcc20c0-0d82-44ab-98fd-bd8521fa61fc","type":"CategoricalAxis"},{"id":"34b21cb0-5480-447c-a55d-6b22752c8835","type":"ColorBar"}],"right":[{"id":"34b21cb0-5480-447c-a55d-6b22752c8835","type":"ColorBar"}],"title":{"id":"4abddca6-2158-47ae-bf2f-970183d2ce94","type":"Title"},"tool_events":{"id":"0687911b-f1c0-4ed7-88a3-d34d546b8257","type":"ToolEvents"},"toolbar":{"id":"a5fc4cdd-6cc6-4da1-97ad-97a088ee87f7","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7ad3e29f-8585-4a70-a207-d353b8c26c16","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5bdbfea9-fd8d-47fa-a87a-286ddd53243e","type":"FactorRange"}},"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"c944c4d3-44d4-48b9-a4d4-80ae1850ea81","type":"ColumnDataSource"},"glyph":{"id":"8fd9b5cd-9c6d-44b8-918d-4ade7a80b0a1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3fb06b4e-98f0-4fb2-afb2-24a5ce022f6a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.77777777777778],"x":[14],"y":["Tuesday"]}},"id":"b8d65901-8ca1-43a9-8f5e-4b05ce366cfa","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"}},"id":"a5c3ebc3-398f-4a92-a141-a7ccebbcfaaf","type":"ResetTool"},{"attributes":{"child":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"466b837e-831a-40a3-b02a-5d521e825639","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.5],"x":[8],"y":["Friday"]}},"id":"47dabfbe-a618-4cc3-ad9a-352312748ab5","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"39b85bc6-1a36-409d-8248-ac045d11d780","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"8ab7c356-dca3-499f-8252-5fb83277b725","type":"LinearColorMapper"},{"attributes":{"child":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"bbdc072f-27c0-421a-b93d-a4b7fdc7550a","type":"Panel"},{"attributes":{},"id":"41ba1e1c-6d5a-4029-a389-d85324e104f8","type":"CategoricalTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d15c9cef-b427-4ede-8185-115f6651260b","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"}},"id":"4bd99de5-a1d4-4795-8ed7-a19ff1ff319a","type":"HelpTool"},{"attributes":{"data_source":{"id":"b8d65901-8ca1-43a9-8f5e-4b05ce366cfa","type":"ColumnDataSource"},"glyph":{"id":"554368cd-e1eb-41da-b6b5-378497e49075","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dc9c7592-2eb0-4c82-9811-d1e1c9e064af","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"4abddca6-2158-47ae-bf2f-970183d2ce94","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.25,12.823529411764707],"x":[12,11],"y":["Tuesday","Wednesday"]}},"id":"fa8abd18-9b87-4d9d-8849-94b000b0396e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.142857142857143,7.0,7.0,7.571428571428571,9.6875],"x":[7,7,11,7,11],"y":["Tuesday","Wednesday","Friday","Sunday","Sunday"]}},"id":"c3c3bf40-d10a-471c-b62e-415f67ac4a07","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7df74a7f-954c-47cf-a869-ac3518dfaca1","type":"ColumnDataSource"},"glyph":{"id":"b2961391-d6ca-4889-aba4-053e3d703af2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"078c9ad8-9949-4a03-99d5-9f0a5bb952ba","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4703abab-ead3-4451-a0e6-b0ca1379c1e2","type":"BasicTickFormatter"},"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"},"ticker":{"id":"7d00d400-a1d0-4a98-bc88-5b120e8976dc","type":"BasicTicker"}},"id":"0fe2ba5d-cd6b-47bb-92dc-dc1ff3b468a2","type":"LinearAxis"},{"attributes":{},"id":"6c762862-3697-4f3f-b22c-82f76ee82b47","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"f7c57efc-d076-4240-97d1-3e5f72521f71","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2961391-d6ca-4889-aba4-053e3d703af2","type":"Rect"},{"attributes":{},"id":"6b42ed79-2193-4b2c-8321-b050a3ed6e45","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.1875,5.0,6.6,4.666666666666667],"x":[11,12,7,13],"y":["Monday","Monday","Thursday","Saturday"]}},"id":"5f39198c-09a0-457f-b6bc-4ae3d5c4e001","type":"ColumnDataSource"},{"attributes":{},"id":"4703abab-ead3-4451-a0e6-b0ca1379c1e2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b8f47141-be92-41a1-b656-e2f5b027ffe6","type":"ColumnDataSource"},"glyph":{"id":"87838a94-0405-4936-a085-db4b9b33bfa9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9ac35465-ea87-44ac-aa73-a4734fcbe1ac","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"5d05d820-14e7-4c78-910c-8c8fc345c141","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"},"ticker":{"id":"2ea36dac-39f5-479d-b645-9b352c7c268c","type":"CategoricalTicker"}},"id":"5fcc20c0-0d82-44ab-98fd-bd8521fa61fc","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4edd3c7-a084-41b3-a7d8-b93e233a4316","type":"Rect"},{"attributes":{"color_mapper":{"id":"d15c9cef-b427-4ede-8185-115f6651260b","type":"LinearColorMapper"},"formatter":{"id":"6b42ed79-2193-4b2c-8321-b050a3ed6e45","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"},"ticker":{"id":"556acebf-11e3-4d45-b7a7-005bb8d8c426","type":"BasicTicker"}},"id":"94701c33-bd72-4ec8-b37b-028b15748614","type":"ColorBar"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5bdbfea9-fd8d-47fa-a87a-286ddd53243e","type":"FactorRange"},{"attributes":{"data_source":{"id":"c50fb671-b5e1-4c9c-8739-06c681fc3839","type":"ColumnDataSource"},"glyph":{"id":"e35903b4-fd6e-435a-8d9b-c905ee705773","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"50df94f4-7497-4b56-8ca2-0b982a8d3673","type":"GlyphRenderer"},{"attributes":{},"id":"0687911b-f1c0-4ed7-88a3-d34d546b8257","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f7162a8-d0e3-409e-bf82-b06efd29bba3","type":"Rect"},{"attributes":{"data_source":{"id":"a0ffc3f7-0fde-491a-8d10-06e43c73728d","type":"ColumnDataSource"},"glyph":{"id":"a4edd3c7-a084-41b3-a7d8-b93e233a4316","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b85f84c1-a5b0-450a-9bd7-4a3bcdb49818","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f3438d1-8191-41f9-938f-2141acff1de8","type":"PanTool"},{"id":"f8cc06fc-13f3-4970-bc41-ed6228017510","type":"WheelZoomTool"},{"id":"f5897336-20da-4e3f-ba74-1db1f9e4ed61","type":"BoxZoomTool"},{"id":"a5cc3d68-474b-4c2f-8bfb-1fa2cc1ee447","type":"SaveTool"},{"id":"9d91f946-08d0-4b3c-902f-9fcf15d23213","type":"ResetTool"},{"id":"a40d1914-3b1d-40c8-8877-b54e63826a10","type":"HelpTool"}]},"id":"173185b8-3ce6-48be-8109-820bd5b7c4c2","type":"Toolbar"},{"attributes":{},"id":"556acebf-11e3-4d45-b7a7-005bb8d8c426","type":"BasicTicker"},{"attributes":{},"id":"1b8660be-e4c2-4948-b464-a320d146e4da","type":"BasicTicker"},{"attributes":{"callback":null,"tabs":[{"id":"bbdc072f-27c0-421a-b93d-a4b7fdc7550a","type":"Panel"},{"id":"466b837e-831a-40a3-b02a-5d521e825639","type":"Panel"}]},"id":"50bd9890-31b0-4d04-ad19-cea79c24a20f","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e35903b4-fd6e-435a-8d9b-c905ee705773","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9eb9fe8b-f430-41c6-adcb-4e35a6179d68","type":"Rect"},{"attributes":{"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"}},"id":"9d91f946-08d0-4b3c-902f-9fcf15d23213","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c2d40e9b-c40b-458e-bf23-46cac6cc4942","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"12a3f47f-c07c-4a1c-8c29-64f1b37e2d47","subtype":"Chart","type":"Plot"}},"id":"f8cc06fc-13f3-4970-bc41-ed6228017510","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"554368cd-e1eb-41da-b6b5-378497e49075","type":"Rect"},{"attributes":{},"id":"d9535928-a446-4a5f-816d-77c17b03ee99","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.142857142857143,1.5,1.7777777777777777,0.0,2.2941176470588234,1.25,0.0,0.0,0.0,0.0,0.0,0.47058823529411764,0.0,0.0,2.3333333333333335,2.0,0.6666666666666666,2.3333333333333335,2.3333333333333335,0.0,0.4444444444444444,0.875,0.0,1.0,0.0,0.0],"x":[7,10,14,10,11,10,12,13,14,6,10,11,12,14,7,10,14,7,10,11,12,17,10,12,13,14],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"b148d535-aac5-4f17-b3a4-ca653f3e9bef","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"c2d40e9b-c40b-458e-bf23-46cac6cc4942","type":"BoxAnnotation"},"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"}},"id":"d58c760e-3fe2-4a95-82d6-2d4df2126f78","type":"BoxZoomTool"},{"attributes":{},"id":"5d05d820-14e7-4c78-910c-8c8fc345c141","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"80d1f5bf-34a5-4aaa-bc07-428930774eb9","subtype":"Chart","type":"Plot"}},"id":"6db3b4c2-f389-4923-9c42-5f9c7be16347","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8582ad88-2463-47ea-af0f-8776db2608c2","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"399d09cc-fd66-4a32-b44a-f5650d8f6570","type":"Rect"},{"attributes":{},"id":"7d00d400-a1d0-4a98-bc88-5b120e8976dc","type":"BasicTicker"},{"attributes":{},"id":"ec92c10d-f89d-4f98-84e0-8b67229d91cd","type":"CategoricalTicker"},{"attributes":{},"id":"f6c2e091-c36d-4844-8e1e-340b6c22eafd","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8fd9b5cd-9c6d-44b8-918d-4ade7a80b0a1","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"7ad3e29f-8585-4a70-a207-d353b8c26c16","type":"Range1d"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"9e3e22df-bc81-47e1-ad69-00fab693ce46","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"87838a94-0405-4936-a085-db4b9b33bfa9","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.5],"x":[8],"y":["Friday"]}},"id":"b8f47141-be92-41a1-b656-e2f5b027ffe6","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.25,12.823529411764707],"x":[12,11],"y":["Tuesday","Wednesday"]}},"id":"a0ffc3f7-0fde-491a-8d10-06e43c73728d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.142857142857143,7.0,7.0,7.571428571428571,9.6875],"x":[7,7,11,7,11],"y":["Tuesday","Wednesday","Friday","Sunday","Sunday"]}},"id":"0fb51783-25ce-43d7-8758-51c512b2c404","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"63109a78-2fdb-44d7-ab26-5740d2440019","type":"ColumnDataSource"},"glyph":{"id":"ac75ffb0-2dc0-4a34-ac90-f950e3266621","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"69d9c656-de34-4aa9-b4c9-913e4e609e54","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fa8abd18-9b87-4d9d-8849-94b000b0396e","type":"ColumnDataSource"},"glyph":{"id":"b45cac35-261e-4373-8652-082177f24d22","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"70507635-c630-4bd4-8387-950fb582c190","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b148d535-aac5-4f17-b3a4-ca653f3e9bef","type":"ColumnDataSource"},"glyph":{"id":"399d09cc-fd66-4a32-b44a-f5650d8f6570","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d7147e4e-41f9-40f3-9f2d-4f2afdd8dec5","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"01a40c78-2e0f-426a-9db8-909c1d18a618","type":"PanTool"},{"id":"6db3b4c2-f389-4923-9c42-5f9c7be16347","type":"WheelZoomTool"},{"id":"d58c760e-3fe2-4a95-82d6-2d4df2126f78","type":"BoxZoomTool"},{"id":"d8a34a61-bd66-4560-82ba-ee215c0c707d","type":"SaveTool"},{"id":"a5c3ebc3-398f-4a92-a141-a7ccebbcfaaf","type":"ResetTool"},{"id":"4bd99de5-a1d4-4795-8ed7-a19ff1ff319a","type":"HelpTool"}]},"id":"a5fc4cdd-6cc6-4da1-97ad-97a088ee87f7","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.77777777777778],"x":[14],"y":["Tuesday"]}},"id":"4b832d67-5d67-46e1-8d1d-dbfd87fc57ea","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"130796b0-a1d1-43a5-9084-15ef4ada1774","type":"Rect"},{"attributes":{"data_source":{"id":"4b832d67-5d67-46e1-8d1d-dbfd87fc57ea","type":"ColumnDataSource"},"glyph":{"id":"39b85bc6-1a36-409d-8248-ac045d11d780","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3a487b02-4627-42fe-9f6f-82612b5988f0","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"36690fd6-cb35-48de-a9e1-7bc047d664d8","type":"Rect"}],"root_ids":["50bd9890-31b0-4d04-ad19-cea79c24a20f"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"7ead0c54-99d6-4e6a-9f71-e3bd58f5ae10","elementid":"d98fe556-1bab-4c7d-9057-6a0a22477c7f","modelid":"50bd9890-31b0-4d04-ad19-cea79c24a20f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});