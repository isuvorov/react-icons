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

var MdRemoveFromQueue = function (_React$Component) {
    _inherits(MdRemoveFromQueue, _React$Component);

    function MdRemoveFromQueue() {
        _classCallCheck(this, MdRemoveFromQueue);

        return _possibleConstructorReturn(this, (MdRemoveFromQueue.__proto__ || Object.getPrototypeOf(MdRemoveFromQueue)).apply(this, arguments));
    }

    _createClass(MdRemoveFromQueue, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 16.6v3.4h-13.2v-3.4h13.2z m8.4 11.8v-20h-30v20h30z m0-23.4q1.3 0 2.3 1t1.1 2.4l-0.1 20q0 1.3-1 2.3t-2.3 0.9h-8.4v3.4h-13.2v-3.4h-8.4q-1.4 0-2.4-0.9t-1-2.3v-20q0-1.4 1-2.4t2.4-1h30z' })
                )
            );
        }
    }]);

    return MdRemoveFromQueue;
}(React.Component);

exports.default = MdRemoveFromQueue;
module.exports = exports['default'];