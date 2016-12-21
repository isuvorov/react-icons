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

var MdVibration = function (_React$Component) {
    _inherits(MdVibration, _React$Component);

    function MdVibration() {
        _classCallCheck(this, MdVibration);

        return _possibleConstructorReturn(this, (MdVibration.__proto__ || Object.getPrototypeOf(MdVibration)).apply(this, arguments));
    }

    _createClass(MdVibration, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 31.6v-23.2h-13.2v23.2h13.2z m0.9-26.6c1.4 0 2.5 1.1 2.5 2.5v25c0 1.4-1.1 2.5-2.5 2.5h-15c-1.4 0-2.5-1.1-2.5-2.5v-25c0-1.4 1.1-2.5 2.5-2.5h15z m4.1 23.4v-16.8h3.4v16.8h-3.4z m5-13.4h3.4v10h-3.4v-10z m-31.6 13.4v-16.8h3.4v16.8h-3.4z m-5-3.4v-10h3.4v10h-3.4z' })
                )
            );
        }
    }]);

    return MdVibration;
}(React.Component);

exports.default = MdVibration;
module.exports = exports['default'];