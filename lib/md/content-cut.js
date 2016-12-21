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

var MdContentCut = function (_React$Component) {
    _inherits(MdContentCut, _React$Component);

    function MdContentCut() {
        _classCallCheck(this, MdContentCut);

        return _possibleConstructorReturn(this, (MdContentCut.__proto__ || Object.getPrototypeOf(MdContentCut)).apply(this, arguments));
    }

    _createClass(MdContentCut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 5h5v1.6l-11.6 11.8-3.4-3.4z m-11.6 15.9c0.5 0 0.9-0.4 0.9-0.9s-0.4-0.9-0.9-0.9-0.9 0.4-0.9 0.9 0.4 0.9 0.9 0.9z m-10 12.5c1.8 0 3.4-1.5 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.5-3.4 3.4 1.6 3.4 3.4 3.4z m0-20c1.8 0 3.4-1.5 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.5-3.4 3.4 1.6 3.4 3.4 3.4z m6.1-0.7l20.5 20.7v1.6h-5l-11.6-11.6-3.9 3.9c0.4 0.8 0.5 1.7 0.5 2.7 0 3.7-2.9 6.6-6.6 6.6s-6.6-2.9-6.6-6.6 2.9-6.6 6.6-6.6c1 0 1.9 0.1 2.7 0.5l3.9-3.9-3.9-3.9c-0.8 0.4-1.7 0.5-2.7 0.5-3.7 0-6.6-2.9-6.6-6.6s2.9-6.6 6.6-6.6 6.6 2.9 6.6 6.6c0 1-0.1 1.9-0.5 2.7z' })
                )
            );
        }
    }]);

    return MdContentCut;
}(React.Component);

exports.default = MdContentCut;
module.exports = exports['default'];