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

var MdTimer = function (_React$Component) {
    _inherits(MdTimer, _React$Component);

    function MdTimer() {
        _classCallCheck(this, MdTimer);

        return _possibleConstructorReturn(this, (MdTimer.__proto__ || Object.getPrototypeOf(MdTimer)).apply(this, arguments));
    }

    _createClass(MdTimer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.4c6.5 0 11.6-5.3 11.6-11.8s-5.1-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.1 11.8 11.6 11.8z m11.7-21.1c2.1 2.6 3.3 5.8 3.3 9.3 0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.5 0 6.8 1.4 9.4 3.4l2.3-2.4c0.9 0.7 1.7 1.5 2.4 2.3z m-13.3 11.1v-10h3.2v10h-3.2z m6.6-21.8v3.4h-10v-3.4h10z' })
                )
            );
        }
    }]);

    return MdTimer;
}(React.Component);

exports.default = MdTimer;
module.exports = exports['default'];