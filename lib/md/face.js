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

var MdFace = function (_React$Component) {
    _inherits(MdFace, _React$Component);

    function MdFace() {
        _classCallCheck(this, MdFace);

        return _possibleConstructorReturn(this, (MdFace.__proto__ || Object.getPrototypeOf(MdFace)).apply(this, arguments));
    }

    _createClass(MdFace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.4c7.3 0 13.4-6.1 13.4-13.4 0-1.3-0.3-2.6-0.6-3.7-1.2 0.3-2.4 0.3-3.7 0.3-5.7 0-10.6-2.7-13.6-7-1.7 4-4.9 7.3-8.8 9-0.1 0.5-0.1 0.9-0.1 1.4 0 7.3 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z m5 16.2c1.2 0 2.1 0.9 2.1 2s-0.9 2.2-2.1 2.2-2.1-1-2.1-2.2 0.9-2 2.1-2z m-10 0c1.2 0 2.1 0.9 2.1 2s-0.9 2.2-2.1 2.2-2.1-1-2.1-2.2 0.9-2 2.1-2z' })
                )
            );
        }
    }]);

    return MdFace;
}(React.Component);

exports.default = MdFace;
module.exports = exports['default'];