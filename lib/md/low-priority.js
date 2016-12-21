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

var MdLowPriority = function (_React$Component) {
    _inherits(MdLowPriority, _React$Component);

    function MdLowPriority() {
        _classCallCheck(this, MdLowPriority);

        return _possibleConstructorReturn(this, (MdLowPriority.__proto__ || Object.getPrototypeOf(MdLowPriority)).apply(this, arguments));
    }

    _createClass(MdLowPriority, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.4 19.1c0-5.9 4.8-10.7 10.7-10.7h5.9v3.2h-5.9c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5h0.9v-3.2l5 5-5 5v-3.4h-0.9c-5.9 0-10.7-4.9-10.7-10.9z m20 7.5h13.2v3.4h-13.2v-3.4z m0-9.1h13.2v3.4h-13.2v-3.4z m0-9.1h13.2v3.2h-13.2v-3.2z' })
                )
            );
        }
    }]);

    return MdLowPriority;
}(React.Component);

exports.default = MdLowPriority;
module.exports = exports['default'];