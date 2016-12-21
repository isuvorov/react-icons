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

var MdRotate90DegreesCcw = function (_React$Component) {
    _inherits(MdRotate90DegreesCcw, _React$Component);

    function MdRotate90DegreesCcw() {
        _classCallCheck(this, MdRotate90DegreesCcw);

        return _possibleConstructorReturn(this, (MdRotate90DegreesCcw.__proto__ || Object.getPrototypeOf(MdRotate90DegreesCcw)).apply(this, arguments));
    }

    _createClass(MdRotate90DegreesCcw, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.3 11.1q4.3 4.4 4.3 10.6t-4.3 10.6q-4.3 4.3-10.7 4.3-3.8 0-7.1-1.8l2.5-2.5q2.1 1.1 4.6 1.1 4.9 0 8.3-3.5 3.4-3.3 3.4-8.2t-3.4-8.3q-3.4-3.4-8.3-3.4v5.4l-7-7 7-7.1v5.3q6.4 0 10.7 4.5z m-26.1 10.4l6.1 6.1 6.1-6.1-6.1-6.1z m6.1-10.8l10.7 10.8-10.7 10.8-10.9-10.8z' })
                )
            );
        }
    }]);

    return MdRotate90DegreesCcw;
}(React.Component);

exports.default = MdRotate90DegreesCcw;
module.exports = exports['default'];