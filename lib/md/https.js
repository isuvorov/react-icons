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

var MdHttps = function (_React$Component) {
    _inherits(MdHttps, _React$Component);

    function MdHttps() {
        _classCallCheck(this, MdHttps);

        return _possibleConstructorReturn(this, (MdHttps.__proto__ || Object.getPrototypeOf(MdHttps)).apply(this, arguments));
    }

    _createClass(MdHttps, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.2 13.4v-3.4q0-2.1-1.6-3.6t-3.6-1.6-3.6 1.6-1.6 3.6v3.4h10.4z m-5.2 15q1.3 0 2.3-1.1t1.1-2.3-1.1-2.3-2.3-1.1-2.3 1.1-1.1 2.3 1.1 2.3 2.3 1.1z m10-15q1.3 0 2.3 0.9t1.1 2.3v16.8q0 1.3-1.1 2.3t-2.3 0.9h-20q-1.3 0-2.3-0.9t-1.1-2.3v-16.8q0-1.3 1.1-2.3t2.3-0.9h1.6v-3.4q0-3.4 2.5-5.9t5.9-2.5 5.9 2.5 2.5 5.9v3.4h1.6z' })
                )
            );
        }
    }]);

    return MdHttps;
}(React.Component);

exports.default = MdHttps;
module.exports = exports['default'];