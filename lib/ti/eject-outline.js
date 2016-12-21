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

var TiEjectOutline = function (_React$Component) {
    _inherits(TiEjectOutline, _React$Component);

    function TiEjectOutline() {
        _classCallCheck(this, TiEjectOutline);

        return _possibleConstructorReturn(this, (TiEjectOutline.__proto__ || Object.getPrototypeOf(TiEjectOutline)).apply(this, arguments));
    }

    _createClass(TiEjectOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.7 14.3v-2.6c0-1.9-1.5-3.4-3.4-3.4h-16.6v16.7c0 1.8 1.5 3.3 3.3 3.3h1.8c1.5 4.8 6.1 8.4 11.3 8.4 6.5 0 11.8-5.1 11.8-11.5 0-5.3-3.5-9.6-8.2-10.9z m-13.4 3.1v5.4c0 0.9-0.7 1.6-1.6 1.6s-1.7-0.7-1.7-1.6v-11.1h11.1c0.9 0 1.7 0.7 1.7 1.6s-0.8 1.7-1.7 1.7h-5.4l8 8c0.6 0.6 0.6 1.7 0 2.4-0.3 0.3-0.7 0.4-1.2 0.4-0.4 0-0.9-0.1-1.2-0.4l-8-8z m10 16c-4.6 0-8.3-3.8-8.3-8.4 0-1.1 0-2.3 0.4-3.3l4.8 4.8c0.6 0.7 1.5 1 2.3 1s1.7-0.3 2.4-1c1.3-1.3 1.3-3.4 0-4.7l-4.3-4.3c0.9-0.3 1.8-0.6 2.7-0.6 4.6 0 8.4 3.6 8.4 8.2 0 4.6-3.8 8.3-8.4 8.3z' })
                )
            );
        }
    }]);

    return TiEjectOutline;
}(React.Component);

exports.default = TiEjectOutline;
module.exports = exports['default'];