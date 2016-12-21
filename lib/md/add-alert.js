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

var MdAddAlert = function (_React$Component) {
    _inherits(MdAddAlert, _React$Component);

    function MdAddAlert() {
        _classCallCheck(this, MdAddAlert);

        return _possibleConstructorReturn(this, (MdAddAlert.__proto__ || Object.getPrototypeOf(MdAddAlert)).apply(this, arguments));
    }

    _createClass(MdAddAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 21.7v-3.3h-5v-5h-3.2v5h-5v3.3h5v5h3.2v-5h5z m4.9 6.3l3.5 3.6v1.8h-30v-1.8l3.5-3.6v-9.6c0-5.4 3.8-10 8.8-11.2v-1.2c0-1.5 1.2-2.6 2.7-2.6s2.7 1.1 2.7 2.6v1.2c5 1.2 8.8 5.8 8.8 11.2v9.6z m-14.8 7h6.6c0 1.8-1.5 3.4-3.3 3.4s-3.3-1.6-3.3-3.4z' })
                )
            );
        }
    }]);

    return MdAddAlert;
}(React.Component);

exports.default = MdAddAlert;
module.exports = exports['default'];