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

var TiEyeOutline = function (_React$Component) {
    _inherits(TiEyeOutline, _React$Component);

    function TiEyeOutline() {
        _classCallCheck(this, TiEyeOutline);

        return _possibleConstructorReturn(this, (TiEyeOutline.__proto__ || Object.getPrototypeOf(TiEyeOutline)).apply(this, arguments));
    }

    _createClass(TiEyeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15c2 0 4 0.6 5.5 1.7 2.2 1.5 4 3.5 5.3 5-1.3 1.4-3.1 3.4-5.3 5-1.5 1-3.5 1.6-5.5 1.6s-4-0.6-5.5-1.6c-2.2-1.6-4-3.6-5.3-5 1.3-1.5 3.1-3.5 5.3-5 1.5-1.1 3.5-1.7 5.5-1.7z m0-3.3c-2.8 0-5.4 0.8-7.4 2.3-4.4 3-7.6 7.7-7.6 7.7s3.2 4.6 7.6 7.7c2 1.4 4.6 2.3 7.4 2.3s5.4-0.9 7.4-2.3c4.4-3.1 7.6-7.7 7.6-7.7s-3.2-4.7-7.6-7.7c-2-1.5-4.6-2.3-7.4-2.3z m0 8.3c-0.9 0-1.7 0.7-1.7 1.7 0 0.9 0.8 1.6 1.7 1.6 0.9 0 1.7-0.7 1.7-1.6 0-1-0.8-1.7-1.7-1.7z m0 6.7c-2.8 0-5-2.3-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m0-8.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.4-3.3-3.4z' })
                )
            );
        }
    }]);

    return TiEyeOutline;
}(React.Component);

exports.default = TiEyeOutline;
module.exports = exports['default'];