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

var MdGpsFixed = function (_React$Component) {
    _inherits(MdGpsFixed, _React$Component);

    function MdGpsFixed() {
        _classCallCheck(this, MdGpsFixed);

        return _possibleConstructorReturn(this, (MdGpsFixed.__proto__ || Object.getPrototypeOf(MdGpsFixed)).apply(this, arguments));
    }

    _createClass(MdGpsFixed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 31.6q4.8 0 8.2-3.4t3.4-8.2-3.4-8.2-8.2-3.4-8.2 3.4-3.4 8.2 3.4 8.2 8.2 3.4z m14.9-13.2h3.5v3.2h-3.5q-0.5 5.3-4.3 9t-9 4.3v3.5h-3.2v-3.5q-5.3-0.5-9-4.3t-4.3-9h-3.5v-3.2h3.5q0.5-5.3 4.3-9t9-4.3v-3.5h3.2v3.5q5.3 0.5 9 4.3t4.3 9z m-14.9-5q2.7 0 4.7 1.9t1.9 4.7-1.9 4.7-4.7 1.9-4.7-1.9-1.9-4.7 1.9-4.7 4.7-1.9z' })
                )
            );
        }
    }]);

    return MdGpsFixed;
}(React.Component);

exports.default = MdGpsFixed;
module.exports = exports['default'];