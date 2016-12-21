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

var MdGpsOff = function (_React$Component) {
    _inherits(MdGpsOff, _React$Component);

    function MdGpsOff() {
        _classCallCheck(this, MdGpsOff);

        return _possibleConstructorReturn(this, (MdGpsOff.__proto__ || Object.getPrototypeOf(MdGpsOff)).apply(this, arguments));
    }

    _createClass(MdGpsOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.1 29.2l-16.3-16.3q-2.4 3.2-2.4 7.1 0 4.8 3.4 8.2t8.2 3.4q3.9 0 7.1-2.4z m-22.1-22.1l2.1-2.1 27.9 27.9-2.1 2.1-3.4-3.4q-3.6 2.9-7.9 3.3v3.5h-3.2v-3.5q-5.3-0.5-9-4.3t-4.3-9h-3.5v-3.2h3.5q0.4-4.3 3.3-7.9z m29.9 11.3h3.5v3.2h-3.5q-0.4 3.1-1.6 5.4l-2.5-2.5q0.8-2.2 0.8-4.5 0-4.8-3.4-8.2t-8.2-3.4q-2.3 0-4.4 0.8l-2.5-2.5q2.4-1.2 5.3-1.6v-3.5h3.2v3.5q5.3 0.5 9 4.3t4.3 9z' })
                )
            );
        }
    }]);

    return MdGpsOff;
}(React.Component);

exports.default = MdGpsOff;
module.exports = exports['default'];