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

var IoMale = function (_React$Component) {
    _inherits(IoMale, _React$Component);

    function IoMale() {
        _classCallCheck(this, IoMale);

        return _possibleConstructorReturn(this, (IoMale.__proto__ || Object.getPrototypeOf(IoMale)).apply(this, arguments));
    }

    _createClass(IoMale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 15l-4.9-4.9-5.4 5.4c1.7 2.3 2.8 5.1 2.8 8.3 0 7.5-6.2 13.7-13.7 13.7s-13.8-6.2-13.8-13.7 6.2-13.8 13.8-13.8c3.1 0 5.9 1.1 8.2 2.8l5.4-5.4-4.9-4.9h12.5v12.5z m-14.2 15.8c1.9-1.9 3-4.4 3-7s-1.1-5.2-3-7.1-4.4-3-7-3-5.2 1.1-7.1 3-3 4.4-3 7.1 1.1 5.1 3 7 4.4 3 7.1 3 5.1-1.1 7-3z' })
                )
            );
        }
    }]);

    return IoMale;
}(React.Component);

exports.default = IoMale;
module.exports = exports['default'];