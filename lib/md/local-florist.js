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

var MdLocalFlorist = function (_React$Component) {
    _inherits(MdLocalFlorist, _React$Component);

    function MdLocalFlorist() {
        _classCallCheck(this, MdLocalFlorist);

        return _possibleConstructorReturn(this, (MdLocalFlorist.__proto__ || Object.getPrototypeOf(MdLocalFlorist)).apply(this, arguments));
    }

    _createClass(MdLocalFlorist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 9.1c-2.3 0-4.1 2-4.1 4.3s1.8 4.1 4.1 4.1 4.1-1.9 4.1-4.1-1.8-4.3-4.1-4.3z m-10.7 8c0-1.6 1-3 2.4-3.7-1.4-0.7-2.4-2.1-2.4-3.8 0-2.3 2-4.2 4.2-4.2 0.9 0 1.7 0.3 2.4 0.8v-0.3c0-2.3 1.8-4.3 4.1-4.3s4.1 2 4.1 4.3v0.3c0.7-0.5 1.5-0.8 2.4-0.8 2.2 0 4.2 1.9 4.2 4.2 0 1.7-1 3.1-2.4 3.8 1.4 0.7 2.4 2.1 2.4 3.7 0 2.3-2 4.2-4.2 4.2-0.9 0-1.7-0.3-2.4-0.8v0.4c0 2.2-1.8 4.1-4.1 4.1s-4.1-1.9-4.1-4.1v-0.4c-0.7 0.5-1.5 0.8-2.4 0.8-2.3 0-4.2-1.9-4.2-4.2z m10.7 19.5c-8.3 0-15-6.7-15-15 8.3 0 15 6.8 15 15z m0 0c0-8.2 6.7-15 15-15 0 8.3-6.7 15-15 15z' })
                )
            );
        }
    }]);

    return MdLocalFlorist;
}(React.Component);

exports.default = MdLocalFlorist;
module.exports = exports['default'];