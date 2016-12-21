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

var MdRemoveRedEye = function (_React$Component) {
    _inherits(MdRemoveRedEye, _React$Component);

    function MdRemoveRedEye() {
        _classCallCheck(this, MdRemoveRedEye);

        return _possibleConstructorReturn(this, (MdRemoveRedEye.__proto__ || Object.getPrototypeOf(MdRemoveRedEye)).apply(this, arguments));
    }

    _createClass(MdRemoveRedEye, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15q2 0 3.5 1.5t1.5 3.5-1.5 3.5-3.5 1.5-3.5-1.5-1.5-3.5 1.5-3.5 3.5-1.5z m0 13.4q3.4 0 5.9-2.5t2.5-5.9-2.5-5.9-5.9-2.5-5.9 2.5-2.5 5.9 2.5 5.9 5.9 2.5z m0-20.9q6.2 0 11.2 3.4t7.2 9.1q-2.2 5.6-7.2 9.1t-11.2 3.4-11.2-3.4-7.2-9.1q2.2-5.6 7.2-9.1t11.2-3.4z' })
                )
            );
        }
    }]);

    return MdRemoveRedEye;
}(React.Component);

exports.default = MdRemoveRedEye;
module.exports = exports['default'];