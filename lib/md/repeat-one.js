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

var MdRepeatOne = function (_React$Component) {
    _inherits(MdRepeatOne, _React$Component);

    function MdRepeatOne() {
        _classCallCheck(this, MdRepeatOne);

        return _possibleConstructorReturn(this, (MdRepeatOne.__proto__ || Object.getPrototypeOf(MdRepeatOne)).apply(this, arguments));
    }

    _createClass(MdRepeatOne, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 25h-2.5v-6.6h-2.5v-1.8l3.4-1.6h1.6v10z m6.8 3.4v-6.8h3.2v10h-20v5l-6.6-6.6 6.6-6.6v5h16.8z m-16.8-16.8v6.8h-3.2v-10h20v-5l6.6 6.6-6.6 6.6v-5h-16.8z' })
                )
            );
        }
    }]);

    return MdRepeatOne;
}(React.Component);

exports.default = MdRepeatOne;
module.exports = exports['default'];