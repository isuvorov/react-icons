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

var MdStayCurrentLandscape = function (_React$Component) {
    _inherits(MdStayCurrentLandscape, _React$Component);

    function MdStayCurrentLandscape() {
        _classCallCheck(this, MdStayCurrentLandscape);

        return _possibleConstructorReturn(this, (MdStayCurrentLandscape.__proto__ || Object.getPrototypeOf(MdStayCurrentLandscape)).apply(this, arguments));
    }

    _createClass(MdStayCurrentLandscape, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 11.6h-23.2v16.8h23.2v-16.8z m-29.9 0q0-1.3 1-2.3t2.3-0.9h30q1.3 0 2.3 0.9t1.1 2.3v16.8q0 1.3-1.1 2.3t-2.3 0.9h-30q-1.3 0-2.3-0.9t-1.1-2.3z' })
                )
            );
        }
    }]);

    return MdStayCurrentLandscape;
}(React.Component);

exports.default = MdStayCurrentLandscape;
module.exports = exports['default'];