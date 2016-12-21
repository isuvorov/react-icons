'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiZoomOutline = function (_React$Component) {
    _inherits(TiZoomOutline, _React$Component);

    function TiZoomOutline() {
        _classCallCheck(this, TiZoomOutline);

        return _possibleConstructorReturn(this, (TiZoomOutline.__proto__ || Object.getPrototypeOf(TiZoomOutline)).apply(this, arguments));
    }

    _createClass(TiZoomOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.3 13.3c2.8 0 5 2.3 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z m0-1.6c-3.6 0-6.6 3-6.6 6.6s3 6.7 6.6 6.7 6.7-3 6.7-6.7-3-6.6-6.7-6.6z m-16.3 17.8c0 2.8 2.3 5.2 5.2 5.2 1.3 0 2.5-0.5 3.5-1.3l4-4c1.2 0.4 2.4 0.6 3.6 0.6 6.5 0 11.7-5.2 11.7-11.7s-5.2-11.6-11.7-11.6c-6.4 0-11.6 5.2-11.6 11.6 0 1.3 0.2 2.5 0.6 3.7l-3.8 3.8c-1 0.9-1.5 2.3-1.5 3.7z m10.8-2.9l-4.2 4.2c-0.4 0.3-0.9 0.5-1.4 0.5-1 0-1.9-0.8-1.9-1.8 0-0.6 0.2-1 0.6-1.4l4.1-4.2c0.8 1.1 1.7 2 2.8 2.7z m5.5 0.1c-4.6 0-8.3-3.8-8.3-8.4s3.7-8.3 8.3-8.3 8.4 3.7 8.4 8.3-3.8 8.4-8.4 8.4z' })
                )
            );
        }
    }]);

    return TiZoomOutline;
}(React.Component);

exports.default = TiZoomOutline;
module.exports = exports['default'];