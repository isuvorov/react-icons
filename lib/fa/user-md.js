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

var FaUserMd = function (_React$Component) {
    _inherits(FaUserMd, _React$Component);

    function FaUserMd() {
        _classCallCheck(this, FaUserMd);

        return _possibleConstructorReturn(this, (FaUserMd.__proto__ || Object.getPrototypeOf(FaUserMd)).apply(this, arguments));
    }

    _createClass(FaUserMd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.1 30q0 0.6-0.5 1t-1 0.4-1-0.4-0.4-1 0.4-1 1-0.4 1 0.4 0.5 1z m22.8 1.4q0 2.7-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.6 0.1-3t0.6-3 1-3 1.8-2.3 2.7-1.4q-0.5 1.2-0.5 2.7v4.6q-1.3 0.4-2.1 1.5t-0.7 2.5q0 1.8 1.2 3t3 1.3 3.1-1.3 1.2-3q0-1.4-0.8-2.5t-2-1.5v-4.6q0-1.4 0.5-2 3 2.3 6.6 2.3t6.6-2.3q0.6 0.6 0.6 2v1.5q-2.4 0-4.1 1.6t-1.7 4.1v2q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.6t1.5 0.6 1.5-0.6 0.6-1.6q0-0.9-0.7-1.5v-2q0-1.2 0.9-2t2-0.9 2 0.9 0.8 2v2q-0.7 0.6-0.7 1.5 0 0.9 0.6 1.6t1.5 0.6 1.6-0.6 0.6-1.6q0-0.9-0.7-1.5v-2q0-1.5-0.8-2.9t-2.1-2.1q0-0.2 0-0.9t0-1.1 0-0.9-0.2-1.1-0.3-0.8q1.5 0.3 2.7 1.3t1.8 2.3 1.1 3 0.5 3 0.1 3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z' })
                )
            );
        }
    }]);

    return FaUserMd;
}(React.Component);

exports.default = FaUserMd;
module.exports = exports['default'];