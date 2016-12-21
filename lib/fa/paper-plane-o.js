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

var FaPaperPlaneO = function (_React$Component) {
    _inherits(FaPaperPlaneO, _React$Component);

    function FaPaperPlaneO() {
        _classCallCheck(this, FaPaperPlaneO);

        return _possibleConstructorReturn(this, (FaPaperPlaneO.__proto__ || Object.getPrototypeOf(FaPaperPlaneO)).apply(this, arguments));
    }

    _createClass(FaPaperPlaneO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.4 0.2q0.7 0.6 0.6 1.5l-5.7 34.3q-0.1 0.6-0.7 1-0.4 0.1-0.7 0.1-0.3 0-0.6-0.1l-11.7-4.8-6.7 7.3q-0.4 0.5-1 0.5-0.4 0-0.6-0.1-0.4-0.1-0.6-0.5t-0.3-0.8v-10.1l-10.5-4.3q-0.8-0.3-0.9-1.3-0.1-0.8 0.7-1.3l37.2-21.4q0.7-0.5 1.5 0z m-7.7 33.5l5-29.5-32 18.4 7.5 3.1 19.2-14.3-10.6 17.8z' })
                )
            );
        }
    }]);

    return FaPaperPlaneO;
}(React.Component);

exports.default = FaPaperPlaneO;
module.exports = exports['default'];