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

var TiLocationOutline = function (_React$Component) {
    _inherits(TiLocationOutline, _React$Component);

    function TiLocationOutline() {
        _classCallCheck(this, TiLocationOutline);

        return _possibleConstructorReturn(this, (TiLocationOutline.__proto__ || Object.getPrototypeOf(TiLocationOutline)).apply(this, arguments));
    }

    _createClass(TiLocationOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 8.3c2.7 0 5.2 1.1 7.1 2.9 1.9 1.9 2.9 4.3 2.9 6.9s-1 5.1-2.9 6.9l-7.1 7-7.1-7c-1.9-1.8-2.9-4.3-2.9-6.9s1-5 2.9-6.9c1.9-1.8 4.4-2.9 7.1-2.9z m0-3.3c-3.4 0-6.8 1.3-9.4 3.8-5.2 5.2-5.2 13.5 0 18.6l9.4 9.3 9.4-9.3c5.2-5.1 5.2-13.4 0-18.6-2.6-2.5-6-3.8-9.4-3.8z m0 9.2c1.1 0 2.2 0.4 2.9 1.2 1.7 1.6 1.7 4.3 0 5.9-0.7 0.8-1.8 1.2-2.9 1.2s-2.2-0.4-2.9-1.2c-1.7-1.6-1.7-4.3 0-5.9 0.7-0.8 1.8-1.2 2.9-1.2z m0-1.7c-1.5 0-3 0.6-4.1 1.7-2.3 2.3-2.3 6 0 8.3 1.1 1.1 2.6 1.7 4.1 1.7s3-0.6 4.1-1.7c2.3-2.3 2.3-6 0-8.3-1.1-1.1-2.6-1.7-4.1-1.7z' })
                )
            );
        }
    }]);

    return TiLocationOutline;
}(React.Component);

exports.default = TiLocationOutline;
module.exports = exports['default'];