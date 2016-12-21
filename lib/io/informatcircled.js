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

var IoInformatcircled = function (_React$Component) {
    _inherits(IoInformatcircled, _React$Component);

    function IoInformatcircled() {
        _classCallCheck(this, IoInformatcircled);

        return _possibleConstructorReturn(this, (IoInformatcircled.__proto__ || Object.getPrototypeOf(IoInformatcircled)).apply(this, arguments));
    }

    _createClass(IoInformatcircled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 19.8c0.2 9.7-7.6 17.5-17.3 17.7s-17.5-7.6-17.7-17.3 7.6-17.5 17.3-17.7 17.5 7.6 17.7 17.3z m-17.5-11c-1.4 0-2.5 1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m3.4 22.1v-0.9h-1.7v-13.4h-5.1v0.9h1.7v12.5h-1.7v0.9h6.8z' })
                )
            );
        }
    }]);

    return IoInformatcircled;
}(React.Component);

exports.default = IoInformatcircled;
module.exports = exports['default'];