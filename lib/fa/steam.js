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

var FaSteam = function (_React$Component) {
    _inherits(FaSteam, _React$Component);

    function FaSteam() {
        _classCallCheck(this, FaSteam);

        return _possibleConstructorReturn(this, (FaSteam.__proto__ || Object.getPrototypeOf(FaSteam)).apply(this, arguments));
    }

    _createClass(FaSteam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.3 13q0 2.2-1.6 3.8t-3.8 1.6-3.9-1.6-1.6-3.8 1.6-3.9 3.9-1.6 3.8 1.6 1.6 3.9z m-17.2 16.6q0-2.4-1.6-4t-4-1.6q-0.6 0-1.2 0.1l2.4 0.9q1.7 0.7 2.4 2.4t0 3.4q-0.7 1.7-2.3 2.4t-3.4 0.1q-0.5-0.2-1.4-0.6t-1.4-0.5q0.7 1.3 2 2.1t2.9 0.8q2.4 0 4-1.6t1.6-3.9z m18.6-16.6q0-2.8-2-4.8t-4.9-2q-2.8 0-4.8 2t-2 4.8q0 2.8 2 4.8t4.8 2q2.9 0 4.9-2t2-4.8z m3.3 0q0 4.2-3 7.2t-7.2 3l-9.7 7.1q-0.3 2.9-2.4 4.9t-5.2 1.9q-2.7 0-4.7-1.6t-2.7-4.3l-5.1-2.1v-9.6l8.7 3.5q1.7-1 3.8-1 0.3 0 0.8 0l6.4-9.1q0-4.1 3-7.1t7.1-2.9q4.2 0 7.2 2.9t3 7.2z' })
                )
            );
        }
    }]);

    return FaSteam;
}(React.Component);

exports.default = FaSteam;
module.exports = exports['default'];